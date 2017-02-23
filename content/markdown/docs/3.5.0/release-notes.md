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

# Release Notes &#x2013; Maven 3.5.0

The Apache Maven team would like to announce the release of Maven 3.5.0

Maven 3.5.0 is [available for download][0].

Maven is a software project management and comprehension tool. Based on the concept of a project object model
(POM), Maven can manage a project's build, reporting and documentation from a central place.

The core release is independent of the plugins available. Further releases of plugins will be made separately.
See the [PluginList][1] for more information.

We hope you enjoy using Maven! If you have any questions, please consult:

- the web site: [http://maven.apache.org/](/)
- the maven-user mailing list: [http://maven.apache.org/mail-lists.html](/mail-lists.html)
- the reference documentation: [http://maven.apache.org/ref/3.5.0/](/ref/3.5.0/)


Reporters and Contributors of this release
------------------------------------------

Bugs: 

 * [MNG-5963] reporter: Larry Singer
 * [MNG-5962] reporter/contributor: Miriam Lee
 * [MNG-5961] reporter: Mike Drob
 * [MNG-5958] reporter: Meytal Genah contributor: Anton Tanasenko
 * [MNG-5852] reporter: Jeffrey Alexander
 * [MNG-5823] reporter: Tobias Oberlies
 * [MNG-5815] reporter: Peter Kjær Guldbæk
 * [MNG-5368] reporter: Andrew Haines

Improvements:

 * [MNG-6030] reporter: Andriy contributor: Andriy
 * [MNG-5934] reporter/contributor: Alex Henrie 
 * [MNG-5883] reporter: Ben Caradoc-Davies

Many thanks to all reporters and contributors for their time and support.

Preliminary Testers
-------------------

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
   for Unix/Linux/Cygwin/Solaris or for Windows. Those issues have been fixed 
   [MNG-5815], [MNG-5852], [MNG-5963], [MNG-6022].

 * In Maven 3.3.9 we have removed bindings for maven-ejb3-plugin cause it 
   does not exist. We follow-up and removed the ArtifactHandler for ejb3
   and the `par` lifecycle. This has been fixed with [MNG-6014], 
   [MNG-6017].

 * In previous Maven versions there had been a larger problem related to 
   memory usage in case of very large reactors (200-300 modules or more)
   which caused failures with out of memeory execptions or the need to increase
   the memory settings. This problem has been fixed with [MNG-6030].

 * If you have defined a property within the `.mvn/maven.config` file
   it was not possible to overwrite the property via command line.
   This has been fixed with [MNG-6078][MNG-6078].

Improvements:


Bugs:

 * [MNG-5297] - Site should tell 'prerequisites.maven is deprecated'
 * [MNG-5368] - UnsupportedOperationException thrown when version range is not correct in dependencyManagement definitions
 * [MNG-5629] - ClosedChannelException from DefaultUpdateCheckManager.read
 * [MNG-5815] - "mvn.cmd" does not indicate failure properly when using "&&"
 * [MNG-5823] - mvnDebug doesn't work with M2_HOME with spaces - missing quotes
 * [MNG-5829] - mvn shell script fails with syntax error on Solaris 10
 * [MNG-5836] - logging config is overridden by $M2_HOME/lib/ext/*.jar
 * [MNG-5852] - mvn shell script invokes /bin/sh but requires Bash functions
 * [MNG-5958] - java.lang.String cannot be cast to org.apache.maven.lifecycle.mapping.LifecyclePhase
 * [MNG-5961] - Maven possibly not aware of log4j2
 * [MNG-5962] - mvn.cmd fails when the current directory has spaces in between
 * [MNG-5963] - mvn.cmd does not return ERROR_CODE
 * [MNG-6022] - mvn.cmd fails if directory contains an ampersand (&)
 * [MNG-6053] - Unsafe System Properties copy in MavenRepositorySystemUtils, causing NPEs
 * [MNG-6105] - properties.internal.SystemProperties.addSystemProperties() is not really thread-safe
 * [MNG-6109] - PluginDescriptor doesn't read since value of parameter
 * [MNG-6117] - ${session.parallel} not correctly set
 * [MNG-6144] - DefaultWagonManagerTest#testGetMissingJarForced() passed incorrect value
 * [MNG-6166] - mvn dependency:go-offline fails due to missing transitive dependency jdom:jdom:jar:1.1
 * [MNG-6171] - REGRESSION: WARNING about usage of a non threadsafe marked plugin is not showed anymore
 * [MNG-6172] - Precedence of command-line system property options has changed

Dependency upgrade:

 * [MNG-5967] - Dependency updates
 * [MNG-6110] - Upgrade Aether to Maven Resolver

Improvements:

 * [MNG-5579] - Unify error output/check logic from shell and batch scripts
 * [MNG-5607] - Don't use M2_HOME in mvn shell/command scripts anymore
 * [MNG-5883] - Silence unnecessary legacy local repository warning
 * [MNG-5889] - .mvn directory should be picked when using --file
 * [MNG-5904] - Remove the whole Ant build
 * [MNG-5931] - Fixing documentation
 * [MNG-5934] - String handling issues identified by PMD
 * [MNG-5946] - Fix links etc. in README.txt which is part of the delivery
 * [MNG-5968] - Default plugin version updates
 * [MNG-5975] - Use Java 7's SimpleDateFormat in CLIReportingUtils#formatTimestamp
 * [MNG-5977] - Improve output readability of our MavenTransferListener implementations
 * [MNG-5993] - Confusing error message in case of missing/empty artifactId and version in pluginManagement
 * [MNG-6001] - Replace %HOME% with %USERPROFILE% in mvn.cmd
 * [MNG-6003] - Drastically reduce JAVA_HOME discovery code
 * [MNG-6014] - Removing ArtifactHandler for ejb3
 * [MNG-6017] - Removing ArtifactHandler for par LifeCycle
 * [MNG-6030] - ReactorModelCache do not used effectively after maven version 3.0.5 which cause a large memory footprint
 * [MNG-6032] - WARNING during build based on absolute path in assembly-descriptor.
 * [MNG-6068] - Document default scope compile in pom XSD and reference documentation
 * [MNG-6078] - Can't overwrite properties which have been defined in .mvn/maven.config
 * [MNG-6081] - Log refactoring - Method Invocation Replaced By Variable
 * [MNG-6102] - Introduce ${maven.conf} in m2.conf
 * [MNG-6145] - Remove non-existent m2 include in component.xml
 * [MNG-6146] - Several small stylistic and spelling improvements to code and documentation
 * [MNG-6147] - MetadataResolutionResult#getGraph() contains duplicate if clause
 * [MNG-6150] - Javadoc improvements for 3.5.0
 * [MNG-6163] - Introduce CLASSWORLDS_JAR in shell startup scripts
 * [MNG-6165] - Deprecate and replace incorrectly spelled public API

New Feature:

 * [MNG-3507] - ANSI color logging for improved output visibility
 * [MNG-5878] - add support for module name != artifactId in every calculated URLs (project, SCM, site): special project.directory property
 * [MNG-6093] - create a slf4j-simple provider extension that supports level color rendering Task
 * [MNG-5954] - Remove outdated maven-embedder/src/main/resources/META-INF/MANIFEST.MF
 * [MNG-6106] - Remove maven.home default value setter from m2.conf
 * [MNG-6136] - Upgrade Maven Wagon from 2.10 to 2.12
 * [MNG-6137] - Clean up duplicate dependencies caused by incomplete Wagon HTTP Provider exclusions
 * [MNG-6138] - Remove obsolete message_*.properties form maven-core
 * [MNG-6140] - update documentation's dependency graph with resolver + resolver-provider + slf4j-provider
 * [MNG-6151] - Force Push master from 737de43e392fc15a0ce366db98d70aa18b3f6c03
 * [MNG-6152] - Add a Jenkinsfile so that builds.apache.org can use multibranch pipeline

Wishes:

 * [MNG-2199] - Support version ranges in parent elements
 * [MNG-6088] - after forked execution success, add an empty line
 * [MNG-6092] - warn if prerequisites.maven is used for non-plugin projects






The full list of changes can be found in our [issue management system][4].

## Complete Release Notes

See [complete release notes for all versions][5]

[0]: ../../download.html
[1]: ../../plugins/index.html
[2]: http://maven.apache.org/
[4]: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12316922&version=12339664&styleName=Text
[5]: ../../docs/history.html
[maven-enforcer-plugin]: /enforcer/maven-enforcer-plugin/
[maven-resources-plugin]: /enforcer/maven-resources-plugin/
[maven-aether-provider]: /ref/3.5.0/maven-aether-provider/
[maven-compat]: /ref/3.5.0/maven-compat/
[MNG-1977]: https://issues.apache.org/jira/browse/MNG-1977