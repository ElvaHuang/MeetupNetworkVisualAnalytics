# filename: big_data_final.py

import networkx as nx
import csv


G1 = nx.Graph(name = 'online')
G2 = nx.Graph(name = 'offline')

Group = {}
reader = csv.reader(file('user_group.csv','rb'))
for line in reader:
    if line[1] in Group:
        Group[line[1]].append(line[0])
    else:
        Group[line[1]] = [line[0]]
SIZE_GROUP = 0

for i in Group.keys():
    SIZE_GROUP = len(Group[i])
    for k in range(0,SIZE_GROUP):
        if (k == (SIZE_GROUP - 1)):
            break;    
        for j in range(k+1,SIZE_GROUP):
            if (Group[i][k],Group[i][j]) in G1.edges():
                G1[Group[i][k]][Group[i][j]]['weight'] =  G1[Group[i][k]][Group[i][j]]['weight'] + 1.0/SIZE_GROUP
            else:
                G1.add_edge(Group[i][k],Group[i][j],weight = 1.0/SIZE_GROUP)

Event = {}
reader = csv.reader(file('user_event.csv','rb'))
for line in reader:
    if line[1] in Event:
        event[line[1]].append(line[0])
    else:
        event[line[1]] = [line[0]]
SIZE_EVENT = 0

for i in Event.keys():
    SIZE_EVENT = len(Event[i])
    for k in range(0,SIZE_EVENT):
        if (k == (SIZE_EVENT - 1)):
            break;    
        for j in range(k+1,SIZE_EVENT):
            if (Event[i][k],Event[i][j]) in G2.edges():
                G2[Event[i][k]][Event[i][j]]['weight'] =  G2[Event[i][k]][Event[i][j]]['weight'] + 1.0/SIZE_EVENT
            else:
                G2.add_edge(Event[i][k],Event[i][j],weight = 1.0/SIZE_EVENT)

print "Clustering coefficient of G1:",average_clustering(G1,5000)
print "Clustering coefficient of G2:",average_clustering(G2,5000)

print "G1:",max_clique(G1)
print "G2:",max_clique(G2)






