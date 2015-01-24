
## node list

rm(list=ls())
setwd("D:/BigDataFinal")

stw <- read.csv("./data/source_target_weight.csv")
View(stw)

groupid <- unique(stw$source)

load("./data/groupIdName.Rda")

nodelist <- groupIdName[groupIdName$groupid %in% groupid, ]
View(nodelist)
row.names(nodelist) <- NULL
colnames(nodelist) <- c("Id", "Label")

load()

write.csv(nodelist, file = "./data/node.csv")
