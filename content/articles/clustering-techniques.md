---
title: "K-Means and Hierarchical Clustering"
category: "Applied Mathematics"
level: "Medium"
tags:
summary: "An overview of k-means and hierarchical clustering"
author: "Nguyen Duy Anh"
date: "2026-04-04"
favorite: false
---

# Introduction to clustering
Clustering is an unsupervised machine learning technique. It aims to group similar objects together. Unlike classification, we don't know how many groups there are: in unsupervised learning, we don't have a dependent variable or outcome ($Y$), only features ($X_1, ..., X_p$). The output of clustering is often utilized in supervised learning. 

To define a good cluster, we need a good metric (as in notion of distance), usually $L_1$ or $L_2$, to make our clusters as compact and seperated as possible. Here we learn two main clustering methods: k-means and hierachical.

# Key considerations in clustering
## Cluster size and outliers
- Clusters should be of meaningful size - extremely small clusters can just mean noise/outliers, while excessively large clusters may overgeneralize and ignore finer structures.
- It's crucial to handle outliers properly. A potential remedy is combining extremely small clusters with their nearest neighboring cluster and splitting extremely large ones.

## Non-membership
- Some data points may not meaningfully belong to any cluster; these points can be considered outliers or belong to less dense regions of the dataset.

## Feature Scaling and Metrics
- The most common metric is the Euclidean metric $L_2$. However, it is sensitive to the scale of the variables - features with larger scales can disproportionately affect the results. Therefore, it is important that you scale/normalize features before clustering using the $L_2$ metric.
- When features are weird (significantly different scales, mixed data types), consider using other metrics, such as the Manhattan.

## Cluster Cohesion and Separation
A cluster's Cohesion (Compactness) refers to how closely packed the data points are withing a cluster.
Clusters' Separation refers to how well the clusters are separated from each other. 

The following are some ways to measure cohesion and separation:

**Within-cluster distances.** These measures, such as the minimum, maximum, and average distances between points within a cluster, provide insights into cluster tightness.

**Calculations.** Given a cluster $C_i$ with points $(x_1, x_2, \dots, x_n)$ and a distance metric $d(x_p, x_q)$, where $x_p, x_q$ represent any two points in the cluster:

- Minimum distance:
$$
\min_{p,q \in [1,n],\, p \ne q} d(x_p, x_q)
$$

- Maximum distance:
$$
\max_{p,q \in [1,n],\, p \ne q} d(x_p, x_q)
$$

- Average distance:
$$
\frac{1}{\binom{n}{2}} \sum_{p=1}^{n-1} \sum_{q=p+1}^{n} d(x_p, x_q)
$$

---

**Between-cluster distances.** These measures quantify cluster separation using distances between cluster centroids or the closest/farthest points between clusters.

**Calculations.** Given clusters $C_i$ and $C_j$ with centroids $\mu_i$ and $\mu_j$:

- Centroid distance:
$$
d(\mu_i, \mu_j)
$$

- Minimum distance:
$$
\min_{x_p \in C_i,\; x_q \in C_j} d(x_p, x_q)
$$

- Maximum distance:
$$
\max_{x_p \in C_i,\; x_q \in C_j} d(x_p, x_q)
$$

---

**Silhouette scores.** These measure how similar an object is to its own cluster compared to other clusters.

**Calculations.** For a point $x_i \in C_i$:

- Let $a_i$ be the average distance from $x_i$ to other points in $C_i$  
- Let $b_i$ be the minimum average distance from $x_i$ to points in other clusters  

- Silhouette score:
$$
s_i = \frac{b_i - a_i}{\max(a_i, b_i)}
$$

- Cluster silhouette score:
$$
\frac{1}{|C_i|} \sum_{x_i \in C_i} s_i
$$

---

**Note.** Since $\max(a_i, b_i)$ is in the denominator, we have $-1 \le s_i \le 1$:

- $s_i \approx 1$: $x_i$ is well clustered  
- $s_i \approx 0$: $x_i$ lies near cluster boundaries  
- $s_i \approx -1$: $x_i$ is likely misclassified

## Visual assessment of Cluster Number
- Using plots, we can determine the appropriate number of clusters. It can be subjective however.

# K-Means Clustering
It aims to group data points into k distinct clusters, where the user chooses k. The algorithm aims to minimize the within-cluster's sum of squares. 

## Steps for k-Means Clustering
1. Randomly select k initial cluster centroids from the dataset
2. Assign each data point to the nearest centroid (based on the metric), creating clusters
3. Find new centroids of these clusters
4. Repeat 2 and 3 till convergence

## Hyperparameters and Initialization
The value of k - number of clusters - is a crucial *hyperparameter*. Techniques such as the elbow method and the silhouette score can assist in determining k. 

K-Means is sensitive to initial positions of centroids. To mitigate sensitivity, the algorithm is executed multiple times with different initial centroids. Common methods include random initialization and k-means++ algorithm

## K-Means++ Initialization
It aims to spread the initial centroids across the dataset. The steps are as follows

1. Randomly choose the first centroid
2. Calculate the distance of each data point to the nearest selected centroid
3. Assign probabilities to data points for being selected as the next centroid, proportional to the distance calculated.
4. Select the next centroid based on the probabilities
5. Repeat 2, 3, and 4.

This is automatically done by the `kmeans()` function if you don't specify the `center` parameter.

## Optimizing k - the Elbow Method
K-means clustering aims to optimize the within-cluster sum of squares (WCSS). WCSS decreases/centroids stabilize as the algorithm iterates, hence it makes sense for us to calculate the WCSS *of a k value*. 

The Elbow Method is a commonly used technique for optimizing k. It involves the following steps:
1. Calculate the WCSS for different k values.
2. Plot it out. The graph typically exhibits a downward slope, since increasing centroids reduce distances between data points. 
3. Identify the "elbow", where the rate of decrease decreases sharply. 
4. That's where the optimal k is. 

# Hierachical Clustering
An unsupervised learning method that builds a hierarchy of clusters. Hierarchy, what a pleasant and powerful sounding word. Anyway, there are two general strategies, divisive (top-down) and agglomerative (bottom-up). In this course, we focus on 

## Agglomerative Hierarchical Clustering
1. Each data point is its own cluster.
2. Pairwise distance between clusters are calculated (using some distance metric of course)
3. Linkage method determines how clusters are merged:
    - Single linkage: merge clusters based on closest pair of points
    - Complete linkage: merge clusters based on farthest pair of points
    - Average linkage: merge clusters based on the average distance between all points in the clusters
4. First merge: merge the two closest clusters
5. Repeat 2, 3, and 4

After k iterations, there will be n-k clusters. The algorithm stops when we obtain our desired number of clusters. 

**Reading a dendogram**: In a dendogram, the height represents distance/dissimilarity between the objects being clustered. The height at which two clusters are merged represents the distance between them. A higher point $\rightarrow$ a greater distance between clusters

## Further notes on linkage method
Here $D$ denotes cluster metric.
### Single Linkage

$$
D(A, B) = \min_{a \in A,\; b \in B} d(a, b)
$$

### Complete Linkage

$$
D(A, B) = \max_{a \in A,\; b \in B} d(a, b)
$$

### Group Average

$$
D(A, B) = \frac{1}{|A|\,|B|} \sum_{a \in A} \sum_{b \in B} d(a, b)
$$