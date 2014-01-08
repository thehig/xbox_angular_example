// app/modules/profile/controllers.js
angular.module('profileApp', [])
    .controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.dummyData =
        {"Success": true, "API_Limit": "0\/350",
            "Player":
                {
                    "Gamertag": "The Hig",
                    "Status":
                    {
                        "Valid": true,
                        "Tier": "Silver",
                        "Online": false,
                        "Online_Status": "Last seen 12\/31\/2013 playing Rock Band 2",
                        "Cheater": false
                    },
                    "Launch_Team":
                    {
                        "X360": false,
                        "NXE": false,
                        "Kinect": false
                    },
                    "Avatar":
                    {
                        "Gamertile":
                        {
                            "Small": "https:\/\/avatar-ssl.xboxlive.com\/global\/t.58410861\/tile\/0\/18000",
                            "Large": "https:\/\/avatar-ssl.xboxlive.com\/global\/t.58410861\/tile\/0\/28000"
                        },
                        "Gamerpic":
                        {
                            "Small": "https:\/\/avatar-ssl.xboxlive.com\/avatar\/The Hig\/avatarpic-s.png",
                            "Large": "https:\/\/avatar-ssl.xboxlive.com\/avatar\/The Hig\/avatarpic-l.png"
                        },
                        "Body": "https:\/\/avatar-ssl.xboxlive.com\/avatar\/The Hig\/avatar-body.png"
                    },
                    "Gamerscore": 15421,
                    "Reputation": 500,
                    "Name": "David Higgins",
                    "Motto": "Got Root?",
                    "Location": "Eir&#233;",
                    "Bio": "PEBKAC"
                },
            "RecentGames":
                [
                    {
                        "ID": 1161889897,
                        "Name": "Rock Band 2",
                        "MarketplaceURL": "http:\/\/marketplace.xbox.com\/en-US\/Title\/1161889897",
                        "BoxArt":
                        {
                            "Small": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d80245410869\/boxartsm.jpg",
                            "Large": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d80245410869\/boxartlg.jpg"
                        },
                        "CatalogLink": "http:\/\/catalog.xboxapi.com\/1161889897"
                    },
                    {
                        "ID": 1414793383,
                        "Name": "Grand Theft Auto V",
                        "MarketplaceURL": "http:\/\/marketplace.xbox.com\/en-US\/Title\/1414793383",
                        "BoxArt":
                        {
                            "Small": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d802545408a7\/boxartsm.jpg",
                            "Large": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d802545408a7\/boxartlg.jpg"
                        },
                        "CatalogLink": "http:\/\/catalog.xboxapi.com\/1414793383"
                    },
                    {
                        "ID": 1297287142,
                        "Name": "Halo 3",
                        "MarketplaceURL": "http:\/\/marketplace.xbox.com\/en-US\/Title\/1297287142",
                        "BoxArt":
                        {
                            "Small": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d8024d5307e6\/boxartsm.jpg",
                            "Large": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d8024d5307e6\/boxartlg.jpg"
                        },
                        "CatalogLink": "http:\/\/catalog.xboxapi.com\/1297287142"
                    },
                    {
                        "ID": 1297287405,
                        "Name": "Kinect Adventures",
                        "MarketplaceURL": "http:\/\/marketplace.xbox.com\/en-US\/Title\/1297287405",
                        "BoxArt":
                        {
                            "Small": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d8024d5308ed\/boxartsm.jpg",
                            "Large": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d8024d5308ed\/boxartlg.jpg"
                        },
                        "CatalogLink": "http:\/\/catalog.xboxapi.com\/1297287405"
                    },
                    {
                        "ID": 1128466454,
                        "Name": "Steel Battalion: H.A.",
                        "MarketplaceURL": "http:\/\/marketplace.xbox.com\/en-US\/Title\/1128466454",
                        "BoxArt":
                        {
                            "Small": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d80243430816\/boxartsm.jpg",
                            "Large": "http:\/\/catalog.xboxapi.com\/image\/66acd000-77fe-1000-9115-d80243430816\/boxartlg.jpg"
                        },
                        "CatalogLink": "http:\/\/catalog.xboxapi.com\/1128466454"
                    }
                ],
            "API_Links":
            {
                "Friends": "https:\/\/xboxapi.com\/friends\/The+Hig",
                "Games": "https:\/\/xboxapi.com\/games\/The+Hig",
                "JSON":
                {
                    "Friends": "https:\/\/xboxapi.com\/json\/friends\/The+Hig",
                    "Games": "https:\/\/xboxapi.com\/json\/games\/The+Hig"
                },
                "XML":
                {
                    "Friends": "https:\/\/xboxapi.com\/xml\/friends\/The+Hig",
                    "Games": "https:\/\/xboxapi.com\/xml\/games\/The+Hig"
                },
                "PHP":
                {
                    "Friends": "https:\/\/xboxapi.com\/php\/friends\/The+Hig",
                    "Games": "https:\/\/xboxapi.com\/php\/games\/The+Hig"
                },
                "Development":
                {
                    "Friends": "https:\/\/xboxapi.com\/dev\/friends\/The+Hig",
                    "Games": "https:\/\/xboxapi.com\/dev\/games\/The+Hig"
                }
            }
        }
    }]);
