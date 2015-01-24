

## group attributes
require(plyr)
group.size <- function(data){
  return(nrow(data))
}
groupSize <- ddply(userGroup.data, .(group), group.size)
colnames(groupSize) <- c("groupid", "size")

write.csv("./data/groupSize.csv")