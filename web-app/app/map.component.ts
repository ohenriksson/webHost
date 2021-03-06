 /**
 * Created by edvard on 2016-03-18.
  *
  *
  * idé: gör alla rum till var sitt objekt innan man ritar upp dem?
  * lägg alla i var sin array, därefter kan allt accessas via en hashmap?
  * ha alla i en hashmap typ, get('infection') ger en lista med alla de rummen
 */

import {Component, OnInit} from 'angular2/core';

import * as d3 from 'd3';
 import {SocketIO} from './socket-io';
 import {room_table} from './map_room_table.ts';

@Component({
    selector: 'map',
    template: `
    <div style="height:100%; width:100%; position:relative;">
        <div style="height:75%; width:100%;">
          <svg class="map" style="display:block; margin:0 auto; "></svg>
          <div id="joergen" style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;">
              <h3 id="inf">Infektion</h3>
              <h3 id="tri">Triage</h3>
              <h3 id="medyel">Medicin gul</h3>
              <h3 id="medblu">Medicin blå</h3>
              <div id="jour">
                  <h3 style="position:relative;">Jour:</h3>
                  <h5 style="position:relative;">ÖNH</h5>
                  <h5 style="position:relative;">Gyn</h5>
                  <h5 style="position:relative;">Barn</h5>
              </div>
              <h3 id="ort">Ortopedi</h3>
              <h3 id="acu">Akutrum</h3>
              <h3 id="surg">Kirurgi</h3>
          </div>

        </div>
        <abra style="display: block; width: 100%; height:25%; "></abra>
    </div>
        `,
    styles: [`
        .map{
          height:100%;
          width:100%;
        }
        #joergen h3 {
            position: absolute;
        }
        #inf {
            left: 7.75%;
            top: -2.5%;
        }
        #tri {
            left: 17.25%;
            top: -2.5%;
        }
        #medyel {
            left: 31.5%;
            top: 9.5%;
        }
        #medblu {
            left: 31.5%;
            top: 28%;
        }
        #jour {
            position: absolute;
            left: 58%;
            top: 12%;
        }
        #ort {
            left: 66%;
            top: 12%;
        }
        #acu {
            left: 38%;
            top: 56%;
        }
        #surg {
            left: 65.75%;
            top: 55%;
        }
        `],
    providers: [SocketIO],
    directives: [room_table]
})

export class MapComponent implements OnInit {
    private static scaleSVG(svg,width,height,endpoints){
        svg.attr("viewBox", endpoints[0] +" " +endpoints[1] +" " +endpoints[2] +" " +endpoints[3]);
        svg.attr("preserveAspectRatio","xMaxYMax");
        svg.attr("height",height +"%");
        svg.attr("width",width +"%");
    }


    static setStyles() {
        var map = d3.select(".map");
        this.scaleSVG(map,90,100,[0,0,940,630]);
    }


    static rooms =
    {
        "infection":[
            {
                "patient_department":"default",
                "occupied":false,
                "room":"1"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"2"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"3"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"4"
            }
        ],
        "nowhere":[
            {
                "patient_department":"default",
                "occupied":true,
                "room":"noRoom"
            }
        ],
        "medicineYellow":[
            {
                "patient_department":"default",
                "occupied":false,
                "room":"10"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"11"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"12"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"13"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"14"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"15"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"16"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"17"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"18"
            }
        ],
        "medicineBlue":[
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"19"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"20"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"21"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"22"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"23"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"24"
            },
            {
                "patient_department":"medicineYellow",
                "occupied":true,
                "room":"25"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"26"
            },
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"27"
            }
        ],
        "ort_cast":[
            {
                "patient_department":"default",
                "occupied":true,
                "room":"47"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"47a"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"47b"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"48"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"48a"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"48b"
            }
        ],
        "surgery":[
            {
                "patient_department":"default",
                "occupied":true,
                "room":"50"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"51"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"52"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"53"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"54"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"55"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"56"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"57"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"58"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"59"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"60"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"61"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"62"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"63"
            }
        ],
        "triage":[
            {
                "patient_department":"default",
                "occupied":true,
                "room":"5"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"6"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"7"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"8"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"9"
            }
        ],
        "acute":[
            {
                "patient_department":"default",
                "occupied":false,
                "room":"A1"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"A2"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"A3"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"A4"
            }
        ],
        "jour":[
            {
                "patient_department":"default",
                "occupied":true,
                "room":"30"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"31"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"32"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"33"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"34"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"35"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"46"
            }
        ],
        "waiting":[
            {
                "patient_department":"medicineBlue",
                "occupied":true,
                "room":"ivr"
            }
        ],
        "orthoped":[
            {
                "patient_department":"default",
                "occupied":true,
                "room":"36"
            },
            {
                "patient_department":"default",
                "occupied":false,
                "room":"37"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"38"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"39"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"40"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"41"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"42"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"43"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"44"
            },
            {
                "patient_department":"default",
                "occupied":true,
                "room":"45"
            }
        ]
    };

    ngOnInit() {
        MapComponent.setStyles();
        MapComponent.draw(MapComponent.rooms);
        //SocketIO.subscribe('room_occupation'); designidé: interfejsa draw(data) så man bara behöver skriva detta
        SocketIO.subscribe('room_occupation', function(data) {
            MapComponent.draw(data.rooms);
        });

    }

    static draw(data){
        this.rooms = data;
        MapComponent.drawRooms();
        room_table.draw(data);
    }

    private static drawRooms() {
        var scale = 0.85;
        var stdSpace = 25 * scale;
        var stdRoomWidth = 60 * scale;
        var stdRoomHeight = 60 * scale;

        var svg = d3.select(".map")
            //.attr("style","height:" +this.map_height+"%; width:100%;")
            .selectAll("*").remove();

        //----infection
        var infecRoomWidth = 80 * scale;
        var infecRoomHeight = 50 * scale;
        var room1: Room = this.drawRoom(".map", 30, 30,
            infecRoomWidth, infecRoomHeight, 'infection',0);
        var room4: Room = this.drawRoomRow(room1,
            RelativePosition.SOUTH, 0, infecRoomWidth, infecRoomHeight, 'infection', 1, RelativePosition.SOUTH, 3);

        //----triage
        var room9: Room = this.drawRoomRow(room1,
            RelativePosition.EAST, stdSpace, stdRoomWidth, stdRoomHeight, 'triage', 0, RelativePosition.SOUTH, 5);

        //----medicine yellow
        var room12: Room = this.drawRoomNextToRoom(room1,
            RelativePosition.EAST, stdSpace*4, stdRoomWidth, stdRoomHeight, 'medicineYellow',2);
        var room10: Room = this.drawRoomRow(room12,
            RelativePosition.SOUTH, 0, stdRoomWidth, stdRoomHeight, 'medicineYellow', 1, RelativePosition.SOUTH, -2);
        var room15: Room = this.drawRoomRow(room12,
            RelativePosition.EAST, 0, stdRoomWidth, stdRoomHeight*0.75, 'medicineYellow', 3, RelativePosition.EAST, 3);
        var room16: Room = this.drawRoomNextToRoom(room15,
            RelativePosition.EAST, 0, stdRoomWidth, stdRoomHeight, 'medicineYellow',6);
        var room18: Room = this.drawRoomRow(room16,
            RelativePosition.SOUTH, 0, stdRoomWidth, stdRoomHeight, 'medicineYellow', 7, RelativePosition.SOUTH, 2);

        //----medicine blue
        var room20: Room = this.drawRoomRow(room18,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight, 'medicineBlue',0, RelativePosition.SOUTH, 2);
        var room25: Room = this.drawRoomRow(room20,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight, 'medicineBlue',2, RelativePosition.WEST, 5);
        var room27: Room = this.drawRoomRow(room25,
            RelativePosition.NORTH, stdSpace, stdRoomWidth, stdRoomHeight, 'medicineBlue',7, RelativePosition.NORTH, 2);




        //----jour
        var room34: Room = this.drawRoomNextToRoom(room16,
            RelativePosition.EAST, stdSpace, stdRoomWidth, stdRoomHeight, 'jour',4);
        var room30: Room = this.drawRoomRow(room34,
            RelativePosition.SOUTH, 0, stdRoomWidth, stdRoomHeight, 'jour',3, RelativePosition.SOUTH, -4);
        var room35: Room = this.drawRoomNextToRoom(room34,
            RelativePosition.EAST, 0, stdRoomWidth, stdRoomHeight, 'jour',5);
        var room46: Room = this.drawRoomNextToRoom(room30,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight, 'jour',6);

        //---ort
        var room38: Room = this.drawRoomRow(room35,
            RelativePosition.EAST, stdSpace*2, stdRoomWidth, stdRoomHeight, 'orthoped',0,RelativePosition.EAST,3);
        var room43: Room = this.drawRoomRow(room38,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight, 'orthoped',3, RelativePosition.SOUTH,5);
        var room45: Room = this.drawRoomRow(room43,
            RelativePosition.WEST, stdSpace, stdRoomWidth, stdRoomHeight, 'orthoped',8, RelativePosition.WEST,2);

        //----ort_cast
        var room47B: Room = this.drawRoomRow(room38,
            RelativePosition.EAST, stdSpace, stdRoomWidth, stdRoomHeight, 'ort_cast',1,RelativePosition.SOUTH,2);
        var room48B: Room = this.drawRoomRow(room47B,
            RelativePosition.SOUTH, 0, stdRoomWidth, stdRoomHeight, 'ort_cast',4, RelativePosition.SOUTH,2);

        //surgery
        var room58: Room = this.drawRoomNextToRoom(room43,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight, 'surgery',8);
        var room54: Room = this.drawRoomRow(room58,
            RelativePosition.WEST, 0, stdRoomWidth, stdRoomHeight, 'surgery',7, RelativePosition.WEST,-4);
        var room63: Room = this.drawRoomRow(room58,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight*0.75, 'surgery',10, RelativePosition.SOUTH,4);
        var room50: Room = this.drawRoomRow(room54,
            RelativePosition.SOUTH, stdSpace, stdRoomWidth, stdRoomHeight*0.75,'surgery',3, RelativePosition.SOUTH,-4);
        var room59: Room = this.drawRoomRelativeToRoom(room58,
            stdRoomWidth+stdSpace, -stdSpace, stdRoomWidth,stdRoomHeight, 'surgery',9);

        //acute
        var roomA4: Room = this.drawRoomRelativeToRoom(room25,
            0, stdSpace*4, stdRoomWidth,stdRoomHeight, 'acute',3);
        var roomA1: Room = this.drawRoomRow(roomA4,
            RelativePosition.EAST, 0, stdRoomWidth*1.5, stdRoomHeight*1.25, 'acute',2, RelativePosition.EAST,-3);

    }

    private static drawRoom(htmlObject: string, x: number, y: number,
             width: number, height: number, roomDep:string, roomNum:number) {
        return new Room(htmlObject, x, y, width, height, roomDep, this.rooms[roomDep][roomNum]);
    }

    private static drawRoomRow(relativeRoom: Room, relPos: RelativePosition, relFirstSpace: number,
                    roomWidth: number, roomHeight: number, roomDep: string, roomNum: number,
                    rowDirection: RelativePosition, numOfRooms: number){

        var inc: number = 1;
        if(numOfRooms < 0){ //go negative?
            numOfRooms = Math.abs(numOfRooms);
            inc = -1;
        }
        var space: number = relFirstSpace;
        for(var i:number = 0; i< numOfRooms; i++){
            relativeRoom = MapComponent.drawRoomNextToRoom(relativeRoom,
                relPos, space, roomWidth, roomHeight, roomDep, roomNum+i*inc);
            if(i == 0){
                space = 0;
                relPos= rowDirection;
            }
        }
        return relativeRoom;
    }

    private static drawRoomNextToRoom(room: Room, relativePosition: RelativePosition, relativeSpace: number,
                       width: number, height: number, roomDep:string, roomNum:number) {
        var x: number;
        var y: number;

        switch(relativePosition) {
            case RelativePosition.NORTH:
                x = room.x;
                y = room.y - room.height -relativeSpace;
                break;
            case RelativePosition.SOUTH:
                x = room.x;
                y = room.y + room.height +relativeSpace;
                break;
            case RelativePosition.EAST:
                x = room.x + room.width +relativeSpace;
                y = room.y;
                break;
            case RelativePosition.WEST:
                x = room.x - room.width -relativeSpace;
                y = room.y;
                break;
        }

        return this.drawRoom(room.htmlObject, x, y, width, height, roomDep, roomNum);
    }

    private static drawRoomRelativeToRoom(room: Room, relativeX: number, relativeY: number,
                           width: number, height: number, roomDep:string, roomNum:number) {

        return this.drawRoom(room.htmlObject, room.x + relativeX, room.y + relativeY,
            width, height, roomDep, roomNum);

    }
}

class Room{
    htmlObject:string;
    x:number;
    y:number;
    width:number;
    height:number;
    occupied:boolean;
    overview:boolean;

    constructor(htmlObject:string, x:number, y:number,
                width:number, height:number, roomDep:string, jsonRoomObject) {
        this.htmlObject = htmlObject;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.occupied = jsonRoomObject['occupied'];

        // ful-hård-kod, detta egentligen lite av en python-uppgift amirite?
        var rNbr = jsonRoomObject['room'];
        this.overview = (rNbr == 13 ||
                         rNbr == 14 ||
                         rNbr == 15 ||
                         rNbr == 24 ||
                         rNbr == 26 ||
                         rNbr == 33 ||
                         rNbr == 36 ||
                         rNbr == 37 ||
                         rNbr == 53 ||
                         rNbr == 60 ||
                         rNbr == 61);

        var color = "black";

        //color formatting
        if (this.occupied && jsonRoomObject['patient_department'] != "default"){
            var department = jsonRoomObject['patient_department'];
            color = departments[department];
            console.log(color);
            //determine color
        }else{
            if(this.occupied) {
                switch(roomDep){
                    case 'acute':
                        color = occupiedRoomColors.acute;
                        break;
                    case 'infection':
                        color = occupiedRoomColors.infec;
                        break;
                    case 'jour':
                        color = occupiedRoomColors.jour;
                        break;
                    case 'medicineBlue':
                        color = occupiedRoomColors.medBlu;
                        break;
                    case 'medicineYellow':
                        color = occupiedRoomColors.medYel;
                        break;
                    case 'ort_cast':
                    case 'orthoped':
                        color = occupiedRoomColors.ort;
                        break;
                    case 'surgery':
                        color = occupiedRoomColors.surg;
                        break;
                    case 'triage':
                        color = occupiedRoomColors.triage;
                        break;
                }
            } else {
                switch(roomDep){
                    case 'acute':
                        color = freeRoomColors.acute;
                        break;
                    case 'infection':
                        color = freeRoomColors.infec;
                        break;
                    case 'jour':
                        color = freeRoomColors.jour;
                        break;
                    case 'medicineBlue':
                        color = freeRoomColors.medBlu;
                        break;
                    case 'medicineYellow':
                        color = freeRoomColors.medYel;
                        break;
                    case 'ort_cast':
                    case 'orthoped':
                        color = freeRoomColors.ort;
                        break;
                    case 'surgery':
                        color = freeRoomColors.surg;
                        break;
                    case 'triage':
                        color = freeRoomColors.triage;
                        break;
                }
            }
        }

        var svg = d3.select(htmlObject).append("svg");

        var rect = svg.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", width)
            .attr("height", height)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .style("fill", color);

        if(this.overview) {
            var iconPath: string;
            if(this.occupied) {
                iconPath = "app/icons/Övervakning_tagen.svg";
            } else {
                iconPath = "app/icons/Övervakning_ledig.svg";
            }
            svg.append("svg:image")
                .attr("x", x + width * 0.08)
                .attr("y", y + height - 27)
                .attr("width", 40)
                .attr("height", 35)
                .attr("xlink:href", iconPath);
        }

        var text = svg.append("text")
            .attr("x", x + width / 2)
            .attr("y", y + height / 2 - 4)
            .attr("dy", ".35em")
            .text(jsonRoomObject['room'])
            .style("font-size", "19px")
            .attr("text-anchor", "middle");

        if (true) { // previously if this.occupied
            /*
            svg.append("circle")
                .attr("cx", x + width / 2 - 15)
                .attr("cy", y + height / 2)
                .attr("r", 4)
                .attr("angle", 360)
                .attr("stroke-width", 1)
                .attr("stroke", "white")
                .style("fill", "red");
            */
            //rect.style("opacity", 0.65);
        //}else{
            text.attr("font-weight","bold")
        }
    }
}

 enum RelativePosition {
     NORTH,
     SOUTH,
     EAST,
     WEST
 };

 var freeRoomColors = {
     infec:"#CFCECE",
     medYel:"#EAD2AC",
     medBlu:"#ACC6D1",
     triage:"#CFCECE",
     jour:"#C2B8D3",
     ort:"#AED1AC",
     surg:"#DBA7AC",
     acute:"#CFCECE"
 };
 var occupiedRoomColors = {
     infec:"#807F7F",
     medYel:"#D3A32A",
     medBlu:"#3D7299",
     triage: "#807F7F",
     jour:"#5A486D",
     ort:"#346933",
     surg:"#9C2726",
     acute:"#807F7F"
 };

 /*var departments = {
     free : {
         default : freeRoomColors.infec,
         medicineBlue : freeRoomColors.medBlu,
         medicineYellow : freeRoomColors.medYel,
         surgery : freeRoomColors.surg,
         orthoped : freeRoomColors.ort,
         jour : freeRoomColors.jour
     },
     occupied : {
         default : occupiedRoomColors.infec,
         medicineBlue : occupiedRoomColors.medBlu,
         medicineYellow : occupiedRoomColors.medYel,
         surgery : occupiedRoomColors.surg,
         orthoped : occupiedRoomColors.ort,
         jour : occupiedRoomColors.jour
     }
 };*/
var departments = {
     default : occupiedRoomColors.infec,
     medicineBlue : occupiedRoomColors.medBlu,
     medicineYellow : occupiedRoomColors.medYel,
     surgery : occupiedRoomColors.surg,
     orthoped : occupiedRoomColors.ort,
     jour : occupiedRoomColors.jour
};
