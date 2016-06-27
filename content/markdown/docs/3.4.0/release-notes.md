<!-- 
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.

 NOTE: For help with the syntax of this file, see:
 http://maven.apache.org/doxia/references/apt-format.html
-->

# Release Notes &#x2013; Maven 3.4.0

The Apache Maven team would like to announce the release of Maven 3.4.0

Maven 3.4.0 is [available for download][0].

Maven is a software project management and comprehension tool. Based on the concept of a project object model
(POM), Maven can manage a project's build, reporting and documentation from a central place.

The core release is independent of the plugins available. Further releases of plugins will be made separately.
See the [PluginList][1] for more information.

We hope you enjoy using Maven! If you have any questions, please consult:

- the web site: [http://maven.apache.org/](/)
- the maven-user mailing list: [http://maven.apache.org/mail-lists.html](/mail-lists.html)
- the reference documentation: [http://maven.apache.org/ref/3.4.0/](/ref/3.4.0/)


Reporters and Contributors of this release
------------------------------------------

Bugs: 

 * [MNG-5984] reporter: Gabriël Konat
 * [MNG-5981] reporter: Stuart McCulloch contributor: Stuart McCulloch
 * [MNG-5963] reporter: Larry Singer
 * [MNG-5962] reporter/contributor: Miriam Lee
 * [MNG-5961] reporter: Mike Drob
 * [MNG-5958] reporter: Meytal Genah contributor: Anton Tanasenko
 * [MNG-5939] reporter: chibbe
 * [MNG-5935] reporter: Marcel Schutte
 * [MNG-5863] reporter/contributor: Petr Kozelka
 * [MNG-5852] reporter: Jeffrey Alexander
 * [MNG-5849] reporter: Ali Reza Sharghi
 * [MNG-5837] reporter: Erlend Birkedal contributor: barthel
 * [MNG-5823] reporter: Tobias Oberlies
 * [MNG-5815] reporter: Peter Kjær Guldbæk
 * [MNG-5629] reporter: Anthony Whitford
 * [MNG-5567] reporter: Pablo La Greca
 * [MNG-5538] reporter: Martin Vavra contributor: barthel
 * [MNG-5368] reporter: Andrew Haines
 * [MNG-4463] reporter: Rob ten Hove contributor: barthel

Improvements:

 * [MNG-6030] reporter: Andriy contributor: Andriy
 * [MNG-5992] reporter: Ryan J. McDonough
 * [MNG-5951] reporter: Jörg Sesterhenn
 * [MNG-5934] reporter/contributor: Alex Henrie 
 * [MNG-5883] reporter: Ben Caradoc-Davies
 * [MNG-4508] reporter: Richard van der Hoff

Many thanks to all reporters and contributors for their time and support.

Preliminary Testers
-------------------

 * Oliver B. Fischer
 * Jieryn
 * Torsten Stolpmann
 * Anton Tanasenko

Thank you also for your time and feedback.

Overview about the changes
--------------------------

 * The `JAVA_HOME` discovery has been reduced to simply if `JAVA_HOME` is set
   or not and trying to discover via `which java` nothing more [MNG-6003].

 * The Bootstrapping support via Ant has been removed. You can only bootstrap Maven
   with a previous version of Maven and not with Ant anymore [MNG-5904].

 * Based on problems in using `M2_HOME` related to different Maven versions and 
   to simplify things the usage of `M2_HOME` has been removed and is not
   supported anymore [MNG-5823], [MNG-5836], [MNG-5607].

 * Imported change for windows users: The usage of `%HOME%` has been replaced
   with `%USERPROFILE%` [MNG-6001]

 * Several issues have been reported and fixed related to the `mvn` script either
   for Unix/Linux/Cygwin/Solaris or for Windows. Those issues have been fixed [MNG-5538],
   [MNG-5815], [MNG-5837], [MNG-5849], [MNG-5852], [MNG-5963], [MNG-6022].

 * In Java it is possible to have a ZIP file being used on the classpath as
   well as JAR files. This has not been supported in previous Maven versions. 
   This has been fixed with [MGN-5567].
 
 * Creating source packages during a release of your artifacts you
   usually had to make workaround based on the current state of the super pom 
   where the maven-source-plugin is attached to the life cycle with the `jar` 
   goal. Unfortunately the `jar` goal forkes the life-cycle which is not always 
   the right thing. So in the majority of the cases people add the following 
   workaround to their corporate pom:

``` xml
  <pluginManagment>
    <plugins>
      ..
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-source-plugin</artifactId>
        <version>..</version>
        <executions>
          <execution>
            <id>attach-sources</id>
            <phase>DISABLE_FORKED_LIFECYCLE_MSOURCES</phase>
          </execution>
        </executions>
      </plugin>
      ..
    </plugins> 
  </pluginManagment>
..
```
  
   The above will detach the maven-source-plugin from the life-cycle and prevent
   calling the `generate-sources` and `generate-resources` twice. But to keep
   generating a source package during the release you need to add the following to
   your pom file:

``` xml
  <plugins>
    <plugin>
      <inherited>true</inherited>
      <artifactId>maven-source-plugin</artifactId>
      <executions>
        <execution>
          <id>attach-sources-no-fork</id>
          <inherited>true</inherited>
          <goals>
            <goal>jar-no-fork</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
```

   The above workaround is no longer needed cause the super pom has been changed
   accordingly [MNG-5940].

 * In Maven 3.3.9 we have removed bindings for maven-ejb3-plugin cause it 
   does not exist. We follow-up and removed the ArtifactHandler for ejb3
   and the `par` lifecycle. This has been fixed with [MNG-6014], 
   [MNG-6017].

 * In previous Maven versions there had been a larger problem related to 
   memory usage in case of very large reactors (200-300 modules or more)
   which caused failures with out of memeory execptions or the need to increase
   the memory settings. This problem has been fixed with [MNG-6030].


Bugs:

 * [MNG-4463] - Version ranges cannot be used for artifacts with 'import' scope
 * [MNG-5359] - Declared execution in PluginMgmt gets bound to lifecycle (regression)
 * [MNG-5368] - UnsupportedOperationException thrown when version range is not correct in dependencyManagement definitions
 * [MNG-5387] - Add ability to replace an artifact in mid-build
 * [MNG-5629] - ClosedChannelException from DefaultUpdateCheckManager.read
 * [MNG-5849] - maven can not be found when current directory is drive/root at least on windows 7 64bit
 * [MNG-5863] - default pom's release-profile should invoke source plugin with goal "jar-no-fork" instead of "jar"
 * [MNG-5868] - Adding serval times the same artifact via MavenProjectHelper (attachArtifact) does not produce a failure
 * [MNG-5935] - Optional true getting lost in managed dependencies when transitive
 * [MNG-5939] - Problem doing release when sources are generate as well
 * [MNG-5958] - java.lang.String cannot be cast to org.apache.maven.lifecycle.mapping.LifecyclePhase
 * [MNG-5961] - Maven possibly not aware of log4j2
 * [MNG-5962] - mvn fails when the current directory has spaces in between
 * [MNG-5967] - Dependency updates.
 * [MNG-5971] - Imported dependencies should be available to inheritance processing
 * [MNG-5981] - Plexus lifecycle could be activated too late during overlapping parallel requests
 * [MNG-5984] - Maven core extension resolution ignores repositories from activeByDefault profiles in settings.xml
 * [MNG-6029] - Duplicate conditional and body in MetadataResolutionResult.java Dependency upgrade

Improvements:

 * [MNG-4508] - No way to avoid adding artifactId to site urls
 * [MNG-5579] - Unify error output/check logic from shell and batch scripts
 * [MNG-5883] - Silence unnecessary legacy local repository warning
 * [MNG-5904] - Remove the whole Ant Build
 * [MNG-5931] - Fixing documentation
 * [MNG-5934] - String handling issues identified by PMD
 * [MNG-5940] - Change the maven-source-plugin jar goal into jar-no-fork in Maven Super POM
 * [MNG-5946] - Fix links etc. in README.txt which is part of the delivery
 * [MNG-5951] - add an option to avoid path addition to inherited URLs
 * [MNG-5968] - Default plugin version updates.
 * [MNG-5975] - Use Java 7's SimpleDateFormat in CLIReportingUtils#formatTimestamp
 * [MNG-5976] - Replace Plexus Utils OS with Commons Lang SystemUtils
 * [MNG-5977] - Improve output readability of our MavenTransferListener implementations
 * [MNG-5992] - Git passwords are exposed as the Super POM still uses Maven Release Plugin 2.3.2
 * [MNG-6014] - Removing ArtifactHandler for ejb3
 * [MNG-6017] - Removing ArtifactHandler for par LifeCycle
 * [MNG-6030] - ReactorModelCache do not used effectively after maven version 3.0.5 which cause a large memory footprint
 * [MNG-6032] - WARNING during build based on absolute path in assembly-descriptor.
 * [MNG-6035] - Upgrade animal-sniffer-maven-plugin to 1.15

New Features:

 * [MNG-1977] - Global dependency exclusions
 * [MNG-2478] - add "resources-filtered" filtered resource directories to super POM
 * [MNG-3507] - ANSI Color logging for improved output visibility.
 * [MNG-5227] - Make 'optional' flag of a dependency manageable.
 * [MNG-5878] - add support for module name != artifactId in every calculated URLs (SCM, site): special project.directory property
 * [MNG-6037] - add gossip slf4j provider support
 * [MNG-6038] - use Gossip slf4j provider as default logging, since it supports level colorization

Task:

 * [MNG-5954] - Remove outdated maven-embedder/src/main/resources/META-INF/MANIFEST.MF

Wish:

 * [MNG-2199] - Support version ranges in parent elements



New Features
------------

 * Hm...[MNG-2478] - add "resources-filtered" filtered resource directories to super POM

   Improving the `Convention over Configuration` paradigm the super POM has been enhanced
   with two supplemental entries for filtered resources.

``` xml
```

Wishes
------



Improvements
------------



Task
----



The full list of changes can be found in our [issue management system][4].

## Complete Release Notes

See [complete release notes for all versions][5]

[0]: ../../download.html
[1]: ../../plugins/index.html
[2]: http://maven.apache.org/
[4]: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12316922&amp;version=12333545
[5]: ../../docs/history.html
[maven-enforcer-plugin]: /enforcer/maven-enforcer-plugin/
[maven-resources-plugin]: /enforcer/maven-resources-plugin/
[maven-aether-provider]: /ref/3.4.0/maven-aether-provider/
[maven-compat]: /ref/3.4.0/maven-compat/
[MNG-1977]: https://issues.apache.org/jira/browse/MNG-1977
[MNG-2199]: https://issues.apache.org/jira/browse/MNG-2199
[MNG-2478]: https://issues.apache.org/jira/browse/MNG-2478
[MNG-3507]: https://issues.apache.org/jira/browse/MNG-3507
[MNG-4463]: https://issues.apache.org/jira/browse/MNG-4463
[MNG-4508]: https://issues.apache.org/jira/browse/MNG-4508
[MNG-5227]: https://issues.apache.org/jira/browse/MNG-5227
[MNG-5359]: https://issues.apache.org/jira/browse/MNG-5359
[MNG-5368]: https://issues.apache.org/jira/browse/MNG-5368
[MNG-5387]: https://issues.apache.org/jira/browse/MNG-5387
[MNG-5538]: https://issues.apache.org/jira/browse/MNG-5538
[MNG-5567]: https://issues.apache.org/jira/browse/MNG-5567
[MNG-5579]: https://issues.apache.org/jira/browse/MNG-5579
[MNG-5607]: https://issues.apache.org/jira/browse/MNG-5607
[MNG-5629]: https://issues.apache.org/jira/browse/MNG-5629
[MNG-5815]: https://issues.apache.org/jira/browse/MNG-5815
[MNG-5823]: https://issues.apache.org/jira/browse/MNG-5823
[MNG-5836]: https://issues.apache.org/jira/browse/MNG-5836
[MNG-5837]: https://issues.apache.org/jira/browse/MNG-5837
[MNG-5849]: https://issues.apache.org/jira/browse/MNG-5849
[MNG-5852]: https://issues.apache.org/jira/browse/MNG-5852
[MNG-5863]: https://issues.apache.org/jira/browse/MNG-5863
[MNG-5868]: https://issues.apache.org/jira/browse/MNG-5868
[MNG-5878]: https://issues.apache.org/jira/browse/MNG-5878
[MNG-5883]: https://issues.apache.org/jira/browse/MNG-5883
[MNG-5904]: https://issues.apache.org/jira/browse/MNG-5904
[MNG-5931]: https://issues.apache.org/jira/browse/MNG-5931
[MNG-5934]: https://issues.apache.org/jira/browse/MNG-5934
[MNG-5935]: https://issues.apache.org/jira/browse/MNG-5935
[MNG-5939]: https://issues.apache.org/jira/browse/MNG-5939
[MNG-5940]: https://issues.apache.org/jira/browse/MNG-5940
[MNG-5946]: https://issues.apache.org/jira/browse/MNG-5946
[MNG-5951]: https://issues.apache.org/jira/browse/MNG-5951
[MNG-5954]: https://issues.apache.org/jira/browse/MNG-5954
[MNG-5958]: https://issues.apache.org/jira/browse/MNG-5958
[MNG-5961]: https://issues.apache.org/jira/browse/MNG-5961
[MNG-5962]: https://issues.apache.org/jira/browse/MNG-5962
[MNG-5963]: https://issues.apache.org/jira/browse/MNG-5963
[MNG-5967]: https://issues.apache.org/jira/browse/MNG-5967
[MNG-5968]: https://issues.apache.org/jira/browse/MNG-5968
[MNG-5971]: https://issues.apache.org/jira/browse/MNG-5971
[MNG-5975]: https://issues.apache.org/jira/browse/MNG-5975
[MNG-5976]: https://issues.apache.org/jira/browse/MNG-5976
[MNG-5977]: https://issues.apache.org/jira/browse/MNG-5977
[MNG-5981]: https://issues.apache.org/jira/browse/MNG-5981
[MNG-5984]: https://issues.apache.org/jira/browse/MNG-5984
[MNG-5992]: https://issues.apache.org/jira/browse/MNG-5992
[MNG-6001]: https://issues.apache.org/jira/browse/MNG-6001
[MNG-6003]: https://issues.apache.org/jira/browse/MNG-6003
[MNG-6014]: https://issues.apache.org/jira/browse/MNG-6014
[MNG-6017]: https://issues.apache.org/jira/browse/MNG-6017
[MNG-6022]: https://issues.apache.org/jira/browse/MNG-6022
[MNG-6030]: https://issues.apache.org/jira/browse/MNG-6030
[MNG-6032]: https://issues.apache.org/jira/browse/MNG-6032
[MNG-6035]: https://issues.apache.org/jira/browse/MNG-6035
[MNG-6037]: https://issues.apache.org/jira/browse/MNG-6037
[MNG-6038]: https://issues.apache.org/jira/browse/MNG-6038
