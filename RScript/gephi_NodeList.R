
##############################################
## --       Create Nodelist               --##
##############################################

rm(list=ls())
setwd("D:/BigDataFinal")

## create relation dataset for the big data related subset
load("./data/userGroup_bigdata.Rda")

str(userGroup_bigdata)
userGroup_bigdata$user <- as.factor(userGroup_bigdata$user)
userGroup_bigdata$group <- as.factor(userGroup_bigdata$group)

## node-node relation
group.user <- function(data){
  return(data$user)
}
require(plyr)
groupsplit.bigdata <- dlply(userGroup_bigdata, .(group), group.user)
length(groupsplit.bigdata)
# names(groupsplit.bigdata)

relation.bigdata <- matrix(nrow = length(groupsplit.bigdata), ncol = length(groupsplit.bigdata))
for (i in 1:length(groupsplit.bigdata)){
  for (j in i:length(groupsplit.bigdata)){
    relation.bigdata[i,j] <- sum(groupsplit.bigdata[[j]] %in% groupsplit.bigdata[[i]])
  }
}

#View(relation.bigdata)
relation.bigdata <- data.frame(ncol = 3, nrow = 211*211)

relation <- function(data){
  for (i in 1:length(data)){
    for (j in i+1:length(data)){
      sources <- names(data)[i]
      target <- names(data)[j]
      value <- sum(data[[j]] %in% data[[i]])
      record <- cbind(sources, target, value)
      record
    }
  }
}

relation.bigdata <- relation(groupsplit.bigdata)






##---------------------------------------------------------------------------------------

## full dataset
load("./data/userGroup.Rda")

str(userGroup)
userGroup$user <- as.factor(userGroup$user)
userGroup$group <- as.factor(userGroup$group)

## node-node relation
group.user <- function(data){
  return(data$user)
}
require(plyr)
groupsplit.full <- dlply(userGroup, .(group), group.user)
length(groupsplit)

relation <- matrix(nrow = length(groupsplit), ncol = length(groupsplit))
for (i in 1:length(groupsplit)){
  for (j in i:length(groupsplit)){
    relation[i,j] <- sum(groupsplit[[j]] %in% groupsplit[[i]])
  }
}

View(relation)