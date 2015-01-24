
##############################################
## --       Reduce Number of Tag          --##

## filter tagid that does not have >= 5 groups
## results are 4848 tags and 152946 relationships

##############################################

rm(list=ls())
setwd("D:/School/2014Fall/BigDataAnalytics/BigDataFinal")


## load in data
load("./data/groupIdTagId.Rda")
load("./data/tagIdName.Rda")
names(groupIdTagId)
names(tagIdName)


## merge two data set
groupIdTagIdName <- merge(groupIdTagId, tagIdName, by.x = "tagid", by.y = "tagid")
head(groupIdTagIdName)
length(unique(groupIdTagIdName$tagname)) # 20624
any(is.na(groupIdTagIdName$tagname))
length(unique(groupIdTagIdName$tagid))  # 20780


## make tagid & groupid factor
groupIdTagIdName$tagid <- as.factor(groupIdTagIdName$tagid)
groupIdTagIdName$groupid <- as.factor(groupIdTagIdName$groupid)


## count number of groups per tag

require(plyr)

tagSize <- ddply(groupIdTagIdName, .(tagid), nrow)
colnames(tagSize) <- c("tagid", "tagSize")
unique(tagSize$tagSize)
summary(tagSize$tagSize)


## select tagid based on tagSize

tagid.selected <- tagSize$tagid[tagSize$tagSize >= 5]
length(tagid.selected)
groupIdTagIdName.selected <- groupIdTagIdName[groupIdTagIdName$tagid %in% tagid.selected, ]
dim(groupIdTagIdName.selected)
View(groupIdTagIdName.selected)


## write out result
row.names(groupIdTagIdName.selected) <- NULL
write.csv(groupIdTagIdName.selected, file = "./data/groupIdTagIdName_selected.csv")


