mongoimport --db TROC --collection users --file Users.json --jsonArray --drop
mongoimport --db TROC --collection biens --file Biens.json --jsonArray --drop
mongoimport --db TROC --collection descriptifBiens --file DescriptifBiens.json --jsonArray --drop
mongoimport --db TROC --collection descriptifServices --file DescriptifServices.json --jsonArray --drop
mongoimport --db TROC --collection services --file Services.json --jsonArray --drop
