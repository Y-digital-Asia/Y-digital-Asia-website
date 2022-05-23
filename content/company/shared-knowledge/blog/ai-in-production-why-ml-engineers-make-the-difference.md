+++
author = "Dr. Ian FitzPatrick"
date = 2022-05-23T10:59:37Z
description = ""
featured_image = "/img/upload/blog-y-digital.jpg"
layout = "blog"
summary = ""
title = "AI in production: why ML Engineers make the difference"

+++
An oft-quoted statistic is that, shockingly, only [1 in 10 Data Science projects](https://venturebeat.com/2019/07/19/why-do-87-of-data-science-projects-never-make-it-into-production/ "https://venturebeat.com/2019/07/19/why-do-87-of-data-science-projects-never-make-it-into-production/") ever make it to production. One unfortunate, high-profile example is the winner of the [Netflix prize](https://www.wired.com/2012/04/netflix-prize-costs/ "https://www.wired.com/2012/04/netflix-prize-costs/") which had the potential to boost recommendation accuracy by 10 percent (not insignificant at the scale of Netflix' services), but was sadly never adopted. And while, in the meantime, the field certainly hasn't been stagnant and some terrain has been gained, it's fair to say that Data Science is still not realising its full potential. It would, of course, be an oversimplification to single out one factor as the cause (major culprits  
being silo'd data and often equally silo'd organisational structures), but while 2012 saw Data Science being heralded as the [sexiest job of the 21st century](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century "https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century") it is perhaps telling that recently another role as emerged as [best job in the US](https://www.forbes.com/sites/louiscolumbus/2019/03/17/machine-learning-engineer-is-the-best-job-in-the-u-s-according-to-indeed/?sh=14324857bb0a "https://www.forbes.com/sites/louiscolumbus/2019/03/17/machine-learning-engineer-is-the-best-job-in-the-u-s-according-to-indeed/?sh=14324857bb0a"), namely, the Machine Learning (ML) Engineer.

To understand why Machine Learning Engineering arose as a discipline it's worth examining one of the other barriers that ML models have encountered on the road to production. Many academically trained Data Scientists are reluctant to venture outside of their jupyter-notebook centric comfort zones. Unfortunately, Jupyter notebooks — however useful for exploration analysis, and prototyping — have proven notoriously difficult to put into production (though some products and services have made valiant attempts). It's also  
worth noting that few ML models operate completely in isolation. For AI systems to deliver their value, they need to evolve from model to solution.

**AI solutions**  
AI solutions are often multi-component systems, comprising: data cleaning, (pre-) processing & analysis pipelines, dashboards, model storage & versioning systems, single-sign-on auth providers, databases, APIs, storage providers, and more. In some cases multiple predictive models, each with a separate purpose, will need to be accommodated within the system. AI  
solutions, in turn, need to be adopted in to end-user workflows and, thus, incorporated into existing systems: sometimes as an API, sometimes as a plug-in or integration with an existing application, sometimes as a stand-alone (web) application. This diversity of components brings about a peculiar Venn-Diagram intersection of knowledge, skills, and tooling that is the terrain of the Machine Learning Engineer.

The relative novelty of the ML Engineering field does mean that few higher-education institutes currently offer the requisite courses and only a smattering of online courses exist on the subject. All in all this entails that hiring managers and recruiters will find themselves having to assess vastly divergent profiles without a formal qualification as a Machine Learning Engineer for the role. So what should they be looking out for?

**Focus on fundamentals**

> Do you really need a Kubeflow specialist or do you need someone who understands the ins and outs of creating ML pipelines and can be expected to learn Airflow/Argo/etc. on-the-job?

While it might be tempting to hire for a particular technology stack (e.g., 5 years of experience with Apache Spark, 3 years of experience with Apache Airflow), the approach does have some drawbacks. Like Data Science, Machine Learning Engineering is a fast-moving field and while there are some tools and frameworks that have stood the test of time, many  
others have found their bubbles bursting and have sunk into obscurity. The more fruitful approach might, therefore, be to treat knowledge of tools and frameworks as a bonus, and rather determine whether the candidate has a good grasp of the fundamentals. The reasoning being, that while tools and frameworks will come and go, the next hotness will invariably stem from the same underlying concepts as established technology. A solid knowledge  
foundation will, thus, enable the candidate the adapt to whatever the current tool-of-choice is at the minor expense of a short period of retraining.

**Y shaped profile**  
Besides, specialist knowledge on MLOps (simply put: DevOps for ML models), deep skills in statistics, and a firm grasp of ML model architecture, the ML Engineering role, due to its versatile nature, also requires generalistic knowledge: from familiarity with UI/UX (without, necessarily, the ability to contribute) to more elaborate understanding of the foundations of orchestrating multi-component applications in on-prem, cloud, or  
hybrid-cloud situations. Thus, the profile of the ML Engineer forms a Y rather than the, more common, T.

![](/img/upload/blog-y-digital.jpg)  
_source:_ [_https://www.reddit.com/r/ProgrammerHumor/comments/6cer5t/what_are_clouds_made_of/_](https://www.reddit.com/r/ProgrammerHumor/comments/6cer5t/what_are_clouds_made_of/ "https://www.reddit.com/r/ProgrammerHumor/comments/6cer5t/what_are_clouds_made_of/")

Linux knowledge is, undoubtedly one of the fundamental pillars of ML Engineering at the stem of the Y because it underlies the containerisation technology that has made microservices architectures possible. Kubernetes, the now industry standard technology for orchestrating containers (and possibly the only exception to the framework rule), should also be a requirement. These fundamentals will equip the ML Engineer with the  
required skills and knowledge to tackle most the complexities involved in training, re-training, validating, versioning, and monitoring a host of different types of ML models that each have their own idiosyncrasies.

At the top of the Y are skills such as HTML, CSS, Javascript, database connections, networking, SQL, and — closer to the stem, where the two prongs meet — we find topics like (data) security, encryption, hashing, building and using Web APIs, programming (the ML Engineer needs to be more of a programming polyglot than the Data Scientist), software  
engineering paradigms, software testing, coding best practices, etc.

Each of the aforementioned skill-sets are obviously beholden to their respective specialisms (UI specialists, Site-Reliability Engineers, Security specialists, Software Engineers, Software Testers, DevOps Engineers, etc.), but the fewer supporting disciplines your organisation provides, the more versatile the ML Engineer will need to be.

**ML Engineering for your organisation  
**Due to scarcity and the aforementioned absence of higher-education courses, organisations in need of ML Engineers will need to expand their search profiles or invest in on-the-job training for professionals from related disciplines. Those wanting to train ML Engineers are faced with either re-training software engineers in Machine Learning or educating Data Scientists with MLOps and software engineering principles. At Y.digital, we made the  
choice to establish the Y. Academy to help us do just that. The Y. Academy focuses on fundamental concepts in different modules to help address the various knowledge gaps that aspiring ML Engineers have when coming from their parent disciplines. By helping to cement Machine Learning Engineering as a staple of the modern Data-Driven organisation we hope to see organisations stop shelving promising AI models and start building systems to empower humans.

Are you looking for ML Engineering expertise to help productionise Data Science models? Or are you looking to establish yourself as an ML Engineering professional?

Contact us for more information at result@y.digital or call [+31 (0)30 – 207 42 74](tel:+31302074274) 