// Initialize the client
var client = require('smartsheet');
var smartsheet = client.createClient({
    accessToken: 'PhGRsXpn3rYJoOttA0zfxa0OPjUhbNrMMKiZV',
    logLevel: 'info'
});

// The `smartsheet` variable now contains access to all of the APIs

// Set queryParameters for `include` and pagination
var options = {
    queryParameters: {
        includeAll: "true"
    }
};

// List all sheets
smartsheet.sheets.listSheets(options)
    .then(function (result) {
        var sheetIdA = result.data[0].id;

        // Load Sheet A and initialize variables with column and row IDs
        smartsheet.sheets.getSheet({ id: sheetIdA })
            .then(function (sheetAInfo) {
                console.log(sheetAInfo);
                var sheetAColumns = sheetAInfo.columns;
                console.log(sheetAColumns[0].id);
                var sheetARows = sheetAInfo.rows;
                console.log(sheetARows[0].id);

                // Create new Sheet B in ScriptingChallenge Folder from Sheet A template
                var sheet = {
                    "name": "Sheet B Shenanigans",
                    "fromId": 3093137270460292
                };

                // Set options
                var options = {
                    body: sheet,
                    folderId: 6140073923110788 //Folder that holds Sheet A
                };

                smartsheet.sheets.createSheetFromExisting(options)
                    .then(function (data) {
                        console.log(data);

                        var sheetIdB = data.result.id;
                        console.log(sheetIdB);

                        //Load New Sheet B
                        smartsheet.sheets.getSheet({ id: sheetIdB })
                            .then(function (sheetBInfo) {
                                console.log(sheetBInfo);

                                var sheetBColumns = sheetBInfo.columns;
                                console.log(sheetBColumns[0].id);

                                //Establishing Row Attributes for 5 New Rows to Sheet B
                                var row = [
                                    {
                                        "toTop": true,
                                        "cells": [
                                            {
                                                "columnId": sheetBColumns[0].id,
                                                "value": "Everything"
                                            },
                                            {
                                                "columnId": sheetBColumns[1].id,
                                                "value": "Everything"
                                            },
                                            {
                                                "columnId": sheetBColumns[2].id,
                                                "value": "Everything"
                                            },
                                            {
                                                "columnId": sheetBColumns[3].id,
                                                "value": "Everything"
                                            }
                                        ]
                                    },
                                    {
                                        "toTop": true,
                                        "cells": [
                                            {
                                                "columnId": sheetBColumns[0].id,
                                                "value": "Hurts"
                                            },
                                            {
                                                "columnId": sheetBColumns[1].id,
                                                "value": "Hurts"
                                            },
                                            {
                                                "columnId": sheetBColumns[2].id,
                                                "value": "Hurts"
                                            },
                                            {
                                                "columnId": sheetBColumns[3].id,
                                                "value": "Hurts"
                                            }
                                        ]
                                    },
                                    {
                                        "toTop": true,
                                        "cells": [
                                            {
                                                "columnId": sheetBColumns[0].id,
                                                "value": "At"
                                            },
                                            {
                                                "columnId": sheetBColumns[1].id,
                                                "value": "At"
                                            },
                                            {
                                                "columnId": sheetBColumns[2].id,
                                                "value": "At"
                                            },
                                            {
                                                "columnId": sheetBColumns[3].id,
                                                "value": "At"
                                            }
                                        ]
                                    },
                                    {
                                        "toTop": true,
                                        "cells": [
                                            {
                                                "columnId": sheetBColumns[0].id,
                                                "value": "Mile"
                                            },
                                            {
                                                "columnId": sheetBColumns[1].id,
                                                "value": "Mile"
                                            },
                                            {
                                                "columnId": sheetBColumns[2].id,
                                                "value": "Mile"
                                            },
                                            {
                                                "columnId": sheetBColumns[3].id,
                                                "value": "Mile"
                                            }
                                        ]
                                    },
                                    {
                                        "toTop": true,
                                        "cells": [
                                            {
                                                "columnId": sheetBColumns[0].id,
                                                "value": 26
                                            },
                                            {
                                                "columnId": sheetBColumns[1].id,
                                                "value": 26
                                            },
                                            {
                                                "columnId": sheetBColumns[2].id,
                                                "value": 26
                                            },
                                            {
                                                "columnId": sheetBColumns[3].id,
                                                "value": 26
                                            }
                                        ]
                                    },
                                ];

                                // Set options
                                var options = {
                                    sheetId: sheetIdB,
                                    body: row
                                };

                                //Add Rows Method
                                smartsheet.sheets.addRows(options)
                                    .then(function (newRows) {
                                        console.log(newRows);
                                        var sheetBRows = newRows.result;
                                        console.log(sheetBRows);
                                        console.log(sheetBRows[0].id)

                                        //Cell-link updates on Sheet B from first 5 rows on Sheet A
                                        var cellLinkAllRows = [
                                            {
                                                "id": sheetBRows[0].id,
                                                "cells": [
                                                    {
                                                        "columnId": sheetBColumns[0].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[0].id,
                                                            "rowId": sheetARows[0].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[1].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[1].id,
                                                            "rowId": sheetARows[0].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[2].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[2].id,
                                                            "rowId": sheetARows[0].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[3].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[3].id,
                                                            "rowId": sheetARows[0].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "id": sheetBRows[1].id,
                                                "cells": [
                                                    {
                                                        "columnId": sheetBColumns[0].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[0].id,
                                                            "rowId": sheetARows[1].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[1].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[1].id,
                                                            "rowId": sheetARows[1].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[2].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[2].id,
                                                            "rowId": sheetARows[1].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[3].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[3].id,
                                                            "rowId": sheetARows[1].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "id": sheetBRows[2].id,
                                                "cells": [
                                                    {
                                                        "columnId": sheetBColumns[0].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[0].id,
                                                            "rowId": sheetARows[2].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[1].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[1].id,
                                                            "rowId": sheetARows[2].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[2].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[2].id,
                                                            "rowId": sheetARows[2].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[3].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[3].id,
                                                            "rowId": sheetARows[2].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "id": sheetBRows[3].id,
                                                "cells": [
                                                    {
                                                        "columnId": sheetBColumns[0].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[0].id,
                                                            "rowId": sheetARows[3].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[1].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[1].id,
                                                            "rowId": sheetARows[3].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[2].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[2].id,
                                                            "rowId": sheetARows[3].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[3].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[3].id,
                                                            "rowId": sheetARows[3].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "id": sheetBRows[4].id,
                                                "cells": [
                                                    {
                                                        "columnId": sheetBColumns[0].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[0].id,
                                                            "rowId": sheetARows[4].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[1].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[1].id,
                                                            "rowId": sheetARows[4].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[2].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[2].id,
                                                            "rowId": sheetARows[4].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    },
                                                    {
                                                        "columnId": sheetBColumns[3].id,
                                                        "value": null,
                                                        "linkInFromCell":
                                                        {
                                                            "columnId": sheetAColumns[3].id,
                                                            "rowId": sheetARows[4].id,
                                                            "sheetId": sheetIdA,
                                                        }
                                                    }
                                                ]
                                            }
                                        ];

                                        //Set options
                                        var options = {
                                            sheetId: sheetIdB,
                                            body: cellLinkAllRows
                                        };

                                        //Update rows in sheet
                                        smartsheet.sheets.updateRow(options)
                                            .then(function (updatedRows) {
                                                console.log(updatedRows);
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            });

                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(function (error) {
                console.log(error);
            });
    })
    .catch(function (error) {
        console.log(error);
    });

