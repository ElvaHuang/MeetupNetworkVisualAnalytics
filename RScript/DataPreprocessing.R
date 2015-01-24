
##############################################

## --       Data Preprocessing            --##

## generated 3 csv file
## groupIdName, tagIdName, groupIdTagId

##############################################

rm(list=ls())
setwd("D:/BigDataFinal")


## userGroup (user-group pairs)
part1 <- read.csv("./data/user_group_part1.csv", col.names = c("user", "group"))
part2 <- read.csv("./data/user_group_part2.csv", col.names = c("user", "group"))
part3 <- read.csv("./data/user_group_part3.csv", col.names = c("user", "group"))
part4 <- read.csv("./data/user_group_part4.csv", col.names = c("user", "group"))
part5 <- read.csv("./data/user_group_part5.csv", col.names = c("user", "group"))
part6 <- read.csv("./data/user_group_part6.csv", col.names = c("user", "group"))

userGroup <- rbind(part1, part2, part3, part4, part5, part6)
save(userGroup, file= "./data/userGroup.Rda")
write.csv(userGroup, file = "./data/userGroup.csv")


## id_group --> groupIdName

groupid <- readLines("./data/id_group.csv")
require(stringr)

index <- str_locate(groupid, "[[:alpha:]]")[,1]

id <- sapply(1:length(groupid), function(i){
  str_sub(groupid[i], 1, index[i]-2)
})

name <- sapply(1:length(groupid), function(i){
  str_sub(groupid[i], index[i], nchar(groupid[i]))
})

groupIdName <- data.frame(groupid = id, groupName = name)

## investigate 
length(unique(groupIdName$groupid))
  ## no duplicates in table
length(unique(groupIdName$groupName))
  ## one duplicate in groupName
groupIdName$groupName[duplicated(groupIdName$groupName)]
groupIdName[groupIdName$groupName == "The Bronx Republican Party Meetup Group",]
  ## 181910 & 181911 duplicated
groupIdName <- groupIdName[-233, ]

## save
save(groupIdName, file = "./data/groupIdName.Rda")
save(groupIdName, file = "./data/groupIdName.csv")


## id_topic_group --> tagIdName
tagIdName <- read.csv("./data/id_topic_group.csv")
head(tagIdName)
colnames(tagIdName) <- c("tagid", "tagname")

## investigate
length(unique(tagIdName$tagid))
length(unique(tagIdName$tagname))
# tagIdName$tagname[tagIdName$tagid == 3287]

## remove duplicated tagid
tagIdName <- tagIdName[!duplicated(tagIdName$tagid), ]
  ## removed duplicated tag id
dim(tagIdName)
View(tagIdName)

tagIdName$tagname[duplicated(tagIdName$tagname) ]
  ## multiple tagId can share the same name

## save
save(tagIdName, file = "./data/tagIdName.Rda")
write.csv(tagIdName, file = "./data/tagIdName.csv")


## grouid_topicid --> groupIdTagId
groupIdTagId <- read.csv("./data/groupid_topicid.csv")
colnames(groupIdTagId) <- c("groupid", "tagid")
length(unique(groupIdTagId$groupid))
  ## it 1 less than in the groupIdName dataset 
length(unique(groupIdTopicId$tagid))
  ## it is more than in the tagIdName dataset

## save
save(groupIdTagId, file = "./data/groupIdTagId.Rda")
write.csv(groupIdTagId, "./data/groupIdTagId.csv")
