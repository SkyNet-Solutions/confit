![confit](https://raw.github.com/deephacks/confit/master/confit-logo-website.png)

[![Build Status](https://travis-ci.org/deephacks/confit.png?branch=master)](https://travis-ci.org/deephacks/confit)

The mission of the project is to provide a simple, yet feature rich, configuration framework for Java. 
Providing the ability of defining configuration decoupled from how and where to store, retrieve and validate 
configuration, also allowing configuration changes without restarting the application. 

The aim is liberate applications to use configuration seamlessly on the terms of their particular environment
without constraining them to Java SE,  EE, OSGi, Spring, CDI or  any other programming model or framework.

## Goals  

* Productivity and Simplicity  
Configuration must be intuitive and non-intrusive, managed in a unified way to support developer 
productivity. Configuration is published and discovered automatically when it become available and is also 
reusable in different contexts without burdening applications with portability issues.

* Predictability and Clarity  
Configuration must be strongly-typed and should express the intents and rules under which circumstances
the application can promise correct behaviour. Violations are handled reliably and does not disturb application
behaviour. Valid changes are applied and exposed to applications in a consistent way.

* Extendability and Portability  
As applications are developed in different shapes and sizes; configuration should enable, not limit, a diversity 
of platforms and technologies.  Applications are supported with the flexibility to  extend and customize a variety 
aspects locally and still be able to manage configuration in a central and unified way.

* Performance and Scalability  
Configuration should not be a limiting factor to application performance. It is quickly accessible to be able 
to meet service-level agreements in environments of scale.

At the moment conf-it comes with provider extensions that allow storing configuration on local disk as 
JSON/YAML/XML or in a relational database using JPA (hibernate or eclipselink) or in HBase. Using either of these 
storage mechanisms, or switching between them, does not impact client code what so ever.

### Examples

There is an [introduction](http://stoffe.deephacks.org/2012/05/07/tools4j-config-part-1-introduction) which is 
a bit outdated at the moment. Will be updated soon.

Conf-it is available in Maven Central.

    <dependency>
      <groupId>org.deephacks</groupId>
      <artifactId>confit</artifactId>
      <version>${version.confit}</version>
    </dependency>


### Licensing

This distribution, as a whole, is licensed under the terms of the Apache License, Version 2.0 (see license.txt).
