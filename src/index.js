import * as d3 from 'd3'
import 'd3-transition'
import './css/index.css'
import 'regenerator-runtime/runtime'


// Données ---------------------------------------------------------------------------------------------------------
const csvData = `Season;Location;Round;Obstacle_Name;Obstacle_Order;;;
1;Venice;Qualifying;Quintuple Steps;1;;;
1;Venice;Qualifying;Rope Swing;2;;;
1;Venice;Qualifying;Rolling Barrel;3;;;
1;Venice;Qualifying;Jumping Spider;4;;;
1;Venice;Qualifying;Pipe Slider;5;;;
1;Venice;Qualifying;Warped Wall;6;;;
1;Venice;Semi-Finals;Quintuple Steps;1;;;
1;Venice;Semi-Finals;Rope Swing;2;;;
1;Venice;Semi-Finals;Rolling Barrel;3;;;
1;Venice;Semi-Finals;Jumping Spider;4;;;
1;Venice;Semi-Finals;Pipe Slider;5;;;
1;Venice;Semi-Finals;Warped Wall;6;;;
1;Venice;Semi-Finals;Tarzan Swing;7;;;
1;Venice;Semi-Finals;Jumping Bars;8;;;
1;Venice;Semi-Finals;Cargo Climb;9;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Twelve Timbers;1;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Curtain Slider;2;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Log Grip;3;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Jumping Spider;4;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Half-Pipe Attack;5;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Warped Wall;6;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Slider Jump;7;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Tarzan Rope;8;;;
1;Sasuke 23 (Japan);National Finals - Stage 1;Rope Ladder;9;;;
1;Sasuke 23 (Japan);National Finals - Stage 2;Downhill Jump;1;;;
1;Sasuke 23 (Japan);National Finals - Stage 2;Salmon Ladder;2;;;
1;Sasuke 23 (Japan);National Finals - Stage 2;Stick Slider;3;;;
1;Sasuke 23 (Japan);National Finals - Stage 2;Unstable Bridge;4;;;
1;Sasuke 23 (Japan);National Finals - Stage 2;Metal Spin;5;;;
1;Sasuke 23 (Japan);National Finals - Stage 2;Wall Lift;6;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Arm Rings;1;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Descending Lamp Grasper;2;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Devil Steps;3;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Shin Cliffhanger;4;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Jumping Bars;5;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Hang Climb;6;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Spider Flip;7;;;
1;Sasuke 23 (Japan);National Finals - Stage 3;Gliding Ring;8;;;
1;Sasuke 23 (Japan);National Finals - Stage 4;Heavenly Ladder;1;;;
1;Sasuke 23 (Japan);National Finals - Stage 4;G-Rope;2;;;
2;Venice;Qualifying;Quad Steps;1;;;
2;Venice;Qualifying;Rope Swing;2;;;
2;Venice;Qualifying;Bridge of Blades;3;;;
2;Venice;Qualifying;Jumping Spider;4;;;
2;Venice;Qualifying;Jumping Bars;5;;;
2;Venice;Qualifying;Warped Wall;6;;;
2;Venice;Semi-Finals;Quad Steps;1;;;
2;Venice;Semi-Finals;Rope Swing;2;;;
2;Venice;Semi-Finals;Bridge of Blades;3;;;
2;Venice;Semi-Finals;Jumping Spider;4;;;
2;Venice;Semi-Finals;Jumping Bars;5;;;
2;Venice;Semi-Finals;Warped Wall;6;;;
2;Venice;Semi-Finals;Salmon Ladder;7;;;
2;Venice;Semi-Finals;Circle Slider;8;;;
2;Venice;Semi-Finals;Cargo Climb;9;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Step Slider;1;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Hazard Swing;2;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Rolling Escargot;3;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Jumping Spider;4;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Half-Pipe Attack;5;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Warped Wall;6;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Giant Swing;7;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Tarzan Rope;8;;;
2;Sasuke 26 (Japan);National Finals - Stage 1;Rope Ladder;9;;;
2;Sasuke 26 (Japan);National Finals - Stage 2;Slider Drop;1;;;
2;Sasuke 26 (Japan);National Finals - Stage 2;Double Salmon Ladder;2;;;
2;Sasuke 26 (Japan);National Finals - Stage 2;Unstable Bridge;3;;;
2;Sasuke 26 (Japan);National Finals - Stage 2;Balance Tank;4;;;
2;Sasuke 26 (Japan);National Finals - Stage 2;Metal Spin;5;;;
2;Sasuke 26 (Japan);National Finals - Stage 2;Wall Lift;6;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Roulette Cylinder;1;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Doorknob Grasper;2;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Cycle Road;3;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Ultimate Cliffhanger;4;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Swing Circle;5;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Bungee Rope Climb;6;;;
2;Sasuke 26 (Japan);National Finals - Stage 3;Flying Bar;7;;;
2;Sasuke 26 (Japan);National Finals - Stage 4;Rope Climb;1;;;
3;Venice;Qualifying;Quad Steps;1;;;
3;Venice;Qualifying;Log Grip;2;;;
3;Venice;Qualifying;Bridge of Blades;3;;;
3;Venice;Qualifying;Jump Hang;4;;;
3;Venice;Qualifying;Jumping Bars;5;;;
3;Venice;Qualifying;Warped Wall;6;;;
3;Venice;Semi-Finals;Quad Steps;1;;;
3;Venice;Semi-Finals;Log Grip;2;;;
3;Venice;Semi-Finals;Bridge of Blades;3;;;
3;Venice;Semi-Finals;Jump Hang;4;;;
3;Venice;Semi-Finals;Jumping Bars;5;;;
3;Venice;Semi-Finals;Warped Wall;6;;;
3;Venice;Semi-Finals;Salmon Ladder;7;;;
3;Venice;Semi-Finals;Unstable Bridge;8;;;
3;Venice;Semi-Finals;Cargo Climb;9;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Step Slider;1;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Rolling Escargot;2;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Giant Swing;3;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Jumping Spider;4;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Half-Pipe Attack;5;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Warped Wall;6;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Spinning Bridge;7;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Tarzan Rope;8;;;
3;Sasuke 27 (Japan);National Finals - Stage 1;Rope Ladder;9;;;
3;Sasuke 27 (Japan);National Finals - Stage 2;Slider Drop;1;;;
3;Sasuke 27 (Japan);National Finals - Stage 2;Double Salmon Ladder;2;;;
3;Sasuke 27 (Japan);National Finals - Stage 2;Unstable Bridge;3;;;
3;Sasuke 27 (Japan);National Finals - Stage 2;Balance Tank;4;;;
3;Sasuke 27 (Japan);National Finals - Stage 2;Metal Spin;5;;;
3;Sasuke 27 (Japan);National Finals - Stage 2;Wall Lift;6;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Arm Bike;1;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Flying Bar;2;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Ultimate Cliffhanger;3;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Jumping Rings;4;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Chain Seesaw;5;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Bungee Rope Climb;6;;;
3;Sasuke 27 (Japan);National Finals - Stage 3;Bar Glider;7;;;
3;Sasuke 27 (Japan);National Finals - Stage 4;Rope Climb;1;;;
4;Southwest;Qualifying (Regional/City);Quad Steps;1;;;
4;Southwest;Qualifying (Regional/City);Log Grip;2;;;
4;Southwest;Qualifying (Regional/City);Spinning Log;3;;;
4;Southwest;Qualifying (Regional/City);Jump Hang;4;;;
4;Southwest;Qualifying (Regional/City);Devil Steps;5;;;
4;Southwest;Qualifying (Regional/City);Warped Wall;6;;;
4;Southwest;Finals (Regional/City);Quad Steps;1;;;
4;Southwest;Finals (Regional/City);Log Grip;2;;;
4;Southwest;Finals (Regional/City);Spinning Log;3;;;
4;Southwest;Finals (Regional/City);Jump Hang;4;;;
4;Southwest;Finals (Regional/City);Devil Steps;5;;;
4;Southwest;Finals (Regional/City);Warped Wall;6;;;
4;Southwest;Finals (Regional/City);Salmon Ladder;7;;;
4;Southwest;Finals (Regional/City);Arm Rings;8;;;
4;Southwest;Finals (Regional/City);Cargo Climb;9;;;
4;Midwest;Qualifying (Regional/City);Quad Steps;1;;;
4;Midwest;Qualifying (Regional/City);Log Grip;2;;;
4;Midwest;Qualifying (Regional/City);Bridge of Blades;3;;;
4;Midwest;Qualifying (Regional/City);Jump Hang;4;;;
4;Midwest;Qualifying (Regional/City);Curtain Slider;5;;;
4;Midwest;Qualifying (Regional/City);Warped Wall;6;;;
4;Midwest;Finals (Regional/City);Quad Steps;1;;;
4;Midwest;Finals (Regional/City);Log Grip;2;;;
4;Midwest;Finals (Regional/City);Bridge of Blades;3;;;
4;Midwest;Finals (Regional/City);Jump Hang;4;;;
4;Midwest;Finals (Regional/City);Curtain Slider;5;;;
4;Midwest;Finals (Regional/City);Warped Wall;6;;;
4;Midwest;Finals (Regional/City);Salmon Ladder;7;;;
4;Midwest;Finals (Regional/City);Lamp Grasper;8;;;
4;Midwest;Finals (Regional/City);Cargo Climb;9;;;
4;Northeast;Qualifying (Regional/City);Quad Steps;1;;;
4;Northeast;Qualifying (Regional/City);Log Grip;2;;;
4;Northeast;Qualifying (Regional/City);Bungee Bridge;3;;;
4;Northeast;Qualifying (Regional/City);Jump Hang;4;;;
4;Northeast;Qualifying (Regional/City);Jumping Bars;5;;;
4;Northeast;Qualifying (Regional/City);Wall Lift;6;;;
4;Northeast;Qualifying (Regional/City);Warped Wall;7;;;
4;Northeast;Finals (Regional/City);Quad Steps;1;;;
4;Northeast;Finals (Regional/City);Log Grip;2;;;
4;Northeast;Finals (Regional/City);Bungee Bridge;3;;;
4;Northeast;Finals (Regional/City);Jump Hang;4;;;
4;Northeast;Finals (Regional/City);Jumping Bars;5;;;
4;Northeast;Finals (Regional/City);Wall Lift;6;;;
4;Northeast;Finals (Regional/City);Warped Wall;7;;;
4;Northeast;Finals (Regional/City);Salmon Ladder;8;;;
4;Northeast;Finals (Regional/City);Cycle Road;9;;;
4;Northeast;Finals (Regional/City);Cargo Climb;10;;;
4;Northwest;Qualifying (Regional/City);Quad Steps;1;;;
4;Northwest;Qualifying (Regional/City);Log Grip;2;;;
4;Northwest;Qualifying (Regional/City);Spinning Log;3;;;
4;Northwest;Qualifying (Regional/City);Jump Hang;4;;;
4;Northwest;Qualifying (Regional/City);Pipe Slider / Devil Steps;5;;;
4;Northwest;Qualifying (Regional/City);Warped Wall;6;;;
4;Northwest;Finals (Regional/City);Quad Steps;1;;;
4;Northwest;Finals (Regional/City);Log Grip;2;;;
4;Northwest;Finals (Regional/City);Spinning Log;3;;;
4;Northwest;Finals (Regional/City);Jump Hang;4;;;
4;Northwest;Finals (Regional/City);Pipe Slider / Devil Steps;5;;;
4;Northwest;Finals (Regional/City);Warped Wall;6;;;
4;Northwest;Finals (Regional/City);Salmon Ladder;7;;;
4;Northwest;Finals (Regional/City);Arm Rings;8;;;
4;Northwest;Finals (Regional/City);Cargo Climb;9;;;
4;Mid-South;Qualifying (Regional/City);Quad Steps;1;;;
4;Mid-South;Qualifying (Regional/City);Log Grip;2;;;
4;Mid-South;Qualifying (Regional/City);Bridge of Blades;3;;;
4;Mid-South;Qualifying (Regional/City);Jump Hang;4;;;
4;Mid-South;Qualifying (Regional/City);Rope Junction;5;;;
4;Mid-South;Qualifying (Regional/City);Warped Wall;6;;;
4;Mid-South;Finals (Regional/City);Quad Steps;1;;;
4;Mid-South;Finals (Regional/City);Log Grip;2;;;
4;Mid-South;Finals (Regional/City);Bridge of Blades;3;;;
4;Mid-South;Finals (Regional/City);Jump Hang;4;;;
4;Mid-South;Finals (Regional/City);Rope Junction;5;;;
4;Mid-South;Finals (Regional/City);Warped Wall;6;;;
4;Mid-South;Finals (Regional/City);Salmon Ladder;7;;;
4;Mid-South;Finals (Regional/City);Lamp Grasper;8;;;
4;Mid-South;Finals (Regional/City);Cargo Climb;9;;;
4;Southeast;Qualifying (Regional/City);Quad Steps;1;;;
4;Southeast;Qualifying (Regional/City);Log Grip;2;;;
4;Southeast;Qualifying (Regional/City);Bungee Bridge;3;;;
4;Southeast;Qualifying (Regional/City);Jump Hang;4;;;
4;Southeast;Qualifying (Regional/City);Swing Circle;5;;;
4;Southeast;Qualifying (Regional/City);Wall Lift;6;;;
4;Southeast;Qualifying (Regional/City);Warped Wall;7;;;
4;Southeast;Finals (Regional/City);Quad Steps;1;;;
4;Southeast;Finals (Regional/City);Log Grip;2;;;
4;Southeast;Finals (Regional/City);Bungee Bridge;3;;;
4;Southeast;Finals (Regional/City);Jump Hang;4;;;
4;Southeast;Finals (Regional/City);Swing Circle;5;;;
4;Southeast;Finals (Regional/City);Wall Lift;6;;;
4;Southeast;Finals (Regional/City);Warped Wall;7;;;
4;Southeast;Finals (Regional/City);Salmon Ladder;8;;;
4;Southeast;Finals (Regional/City);Cycle Road;9;;;
4;Southeast;Finals (Regional/City);Cargo Climb;10;;;
4;Las Vegas;National Finals - Stage 1;Step Slider;1;;;
4;Las Vegas;National Finals - Stage 1;Rolling Log;2;;;
4;Las Vegas;National Finals - Stage 1;Giant Swing;3;;;
4;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
4;Las Vegas;National Finals - Stage 1;Half-Pipe Attack;5;;;
4;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
4;Las Vegas;National Finals - Stage 1;Spinning Bridge;7;;;
4;Las Vegas;National Finals - Stage 1;Tarzan Rope;8;;;
4;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
4;Las Vegas;National Finals - Stage 2;Slider Drop;1;;;
4;Las Vegas;National Finals - Stage 2;Double Salmon Ladder;2;;;
4;Las Vegas;National Finals - Stage 2;Unstable Bridge;3;;;
4;Las Vegas;National Finals - Stage 2;Balance Tank;4;;;
4;Las Vegas;National Finals - Stage 2;Metal Spin;5;;;
4;Las Vegas;National Finals - Stage 2;Wall Lift;6;;;
4;Las Vegas;National Finals - Stage 3;Roulette Cylinder;1;;;
4;Las Vegas;National Finals - Stage 3;Doorknob Grasper;2;;;
4;Las Vegas;National Finals - Stage 3;Floating Boards;3;;;
4;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;4;;;
4;Las Vegas;National Finals - Stage 3;Bungee Rope Climb;5;;;
4;Las Vegas;National Finals - Stage 3;Hang Climb;6;;;
4;Las Vegas;National Finals - Stage 3;Spider Flip;7;;;
4;Las Vegas;National Finals - Stage 3;Flying Bar;8;;;
4;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
5;Venice;Qualifying (Regional/City);Quintuple Steps;1;;;
5;Venice;Qualifying (Regional/City);Frame Slider;2;;;
5;Venice;Qualifying (Regional/City);Domino Hill;3;;;
5;Venice;Qualifying (Regional/City);Floating Chains;4;;;
5;Venice;Qualifying (Regional/City);Flying Nunchuks / Trapeze Swing;5;;;
5;Venice;Qualifying (Regional/City);Warped Wall;6;;;
5;Venice;Finals (Regional/City);Quintuple Steps;1;;;
5;Venice;Finals (Regional/City);Frame Slider;2;;;
5;Venice;Finals (Regional/City);Domino Hill;3;;;
5;Venice;Finals (Regional/City);Floating Chains;4;;;
5;Venice;Finals (Regional/City);Flying Nunchuks / Trapeze Swing;5;;;
5;Venice;Finals (Regional/City);Warped Wall;6;;;
5;Venice;Finals (Regional/City);Salmon Ladder;7;;;
5;Venice;Finals (Regional/City);Rope Maze;8;;;
5;Venice;Finals (Regional/City);Cliffhanger;9;;;
5;Venice;Finals (Regional/City);Spider Climb;10;;;
5;Baltimore;Qualifying (Regional/City);Quintuple Steps;1;;;
5;Baltimore;Qualifying (Regional/City);Downhill Jump;2;;;
5;Baltimore;Qualifying (Regional/City);Prism Tilt;3;;;
5;Baltimore;Qualifying (Regional/City);Swing Jump;4;;;
5;Baltimore;Qualifying (Regional/City);Circle Cross;5;;;
5;Baltimore;Qualifying (Regional/City);Warped Wall;6;;;
5;Baltimore;Finals (Regional/City);Quintuple Steps;1;;;
5;Baltimore;Finals (Regional/City);Downhill Jump;2;;;
5;Baltimore;Finals (Regional/City);Prism Tilt;3;;;
5;Baltimore;Finals (Regional/City);Swing Jump;4;;;
5;Baltimore;Finals (Regional/City);Circle Cross;5;;;
5;Baltimore;Finals (Regional/City);Warped Wall;6;;;
5;Baltimore;Finals (Regional/City);Salmon Ladder;7;;;
5;Baltimore;Finals (Regional/City);Rumbling Dice;8;;;
5;Baltimore;Finals (Regional/City);Body Prop;9;;;
5;Baltimore;Finals (Regional/City);Spider Climb;10;;;
5;Miami;Qualifying (Regional/City);Quintuple Steps;1;;;
5;Miami;Qualifying (Regional/City);Utility Pole Slider;2;;;
5;Miami;Qualifying (Regional/City);Balance Bridge;3;;;
5;Miami;Qualifying (Regional/City);Slider Jump;4;;;
5;Miami;Qualifying (Regional/City);Monkey Pegs;5;;;
5;Miami;Qualifying (Regional/City);Warped Wall;6;;;
5;Miami;Finals (Regional/City);Quintuple Steps;1;;;
5;Miami;Finals (Regional/City);Utility Pole Slider;2;;;
5;Miami;Finals (Regional/City);Balance Bridge;3;;;
5;Miami;Finals (Regional/City);Slider Jump;4;;;
5;Miami;Finals (Regional/City);Monkey Pegs;5;;;
5;Miami;Finals (Regional/City);Warped Wall;6;;;
5;Miami;Finals (Regional/City);Salmon Ladder;7;;;
5;Miami;Finals (Regional/City);Ledge Jump;8;;;
5;Miami;Finals (Regional/City);Rolling Steel;9;;;
5;Miami;Finals (Regional/City);Spider Climb;10;;;
5;Denver;Qualifying (Regional/City);Quintuple Steps;1;;;
5;Denver;Qualifying (Regional/City);Rolling Log;2;;;
5;Denver;Qualifying (Regional/City);Rotating Bridge;3;;;
5;Denver;Qualifying (Regional/City);Jump Hang Kai;4;;;
5;Denver;Qualifying (Regional/City);Grip Hang;5;;;
5;Denver;Qualifying (Regional/City);Warped Wall;6;;;
5;Denver;Finals (Regional/City);Quintuple Steps;1;;;
5;Denver;Finals (Regional/City);Rolling Log;2;;;
5;Denver;Finals (Regional/City);Rotating Bridge;3;;;
5;Denver;Finals (Regional/City);Jump Hang Kai;4;;;
5;Denver;Finals (Regional/City);Grip Hang;5;;;
5;Denver;Finals (Regional/City);Warped Wall;6;;;
5;Denver;Finals (Regional/City);Salmon Ladder;7;;;
5;Denver;Finals (Regional/City);Floating Stairs;8;;;
5;Denver;Finals (Regional/City);Pole Grasper;9;;;
5;Denver;Finals (Regional/City);Spider Climb;10;;;
5;Las Vegas;National Finals - Stage 1;Timbers;1;;;
5;Las Vegas;National Finals - Stage 1;Giant Ring;2;;;
5;Las Vegas;National Finals - Stage 1;Rope Glider;3;;;
5;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
5;Las Vegas;National Finals - Stage 1;Half-Pipe Attack;5;;;
5;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
5;Las Vegas;National Finals - Stage 1;Spinning Bridge;7;;;
5;Las Vegas;National Finals - Stage 1;Tarzan Rope;8;;;
5;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
5;Las Vegas;National Finals - Stage 2;Hang Slider;1;;;
5;Las Vegas;National Finals - Stage 2;Double Salmon Ladder;2;;;
5;Las Vegas;National Finals - Stage 2;Unstable Bridge;3;;;
5;Las Vegas;National Finals - Stage 2;Balance Tank;4;;;
5;Las Vegas;National Finals - Stage 2;Metal Spin;5;;;
5;Las Vegas;National Finals - Stage 2;Wall Lift;6;;;
5;Las Vegas;National Finals - Stage 3;Roulette Cylinder;1;;;
5;Las Vegas;National Finals - Stage 3;Doorknob Grasper;2;;;
5;Las Vegas;National Finals - Stage 3;Floating Boards;3;;;
5;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;4;;;
5;Las Vegas;National Finals - Stage 3;Bungee Rope Climb;5;;;
5;Las Vegas;National Finals - Stage 3;Hang Climb;6;;;
5;Las Vegas;National Finals - Stage 3;Spider Flip;7;;;
5;Las Vegas;National Finals - Stage 3;Flying Bar;8;;;
5;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
6;Venice;Qualifying (Regional/City);Quintuple Steps;1;;;
6;Venice;Qualifying (Regional/City);Spinning Wheel;2;;;
6;Venice;Qualifying (Regional/City);Slack Ladder;3;;;
6;Venice;Qualifying (Regional/City);Jumping Bars into Cargo Net;4;;;
6;Venice;Qualifying (Regional/City);Monkey Pegs;5;;;
6;Venice;Qualifying (Regional/City);Warped Wall;6;;;
6;Venice;Finals (Regional/City);Quintuple Steps;1;;;
6;Venice;Finals (Regional/City);Spinning Wheel;2;;;
6;Venice;Finals (Regional/City);Slack Ladder;3;;;
6;Venice;Finals (Regional/City);Jumping Bars into Cargo Net;4;;;
6;Venice;Finals (Regional/City);Monkey Pegs;5;;;
6;Venice;Finals (Regional/City);Warped Wall;6;;;
6;Venice;Finals (Regional/City);Salmon Ladder;7;;;
6;Venice;Finals (Regional/City);Cannonball Alley;8;;;
6;Venice;Finals (Regional/City);Body Prop;9;;;
6;Venice;Finals (Regional/City);Spider Climb;10;;;
6;Dallas;Qualifying (Regional/City);Quintuple Steps;1;;;
6;Dallas;Qualifying (Regional/City);Log Grip;2;;;
6;Dallas;Qualifying (Regional/City);Tilting Table;3;;;
6;Dallas;Qualifying (Regional/City);Swing Jump;4;;;
6;Dallas;Qualifying (Regional/City);Ring Toss;5;;;
6;Dallas;Qualifying (Regional/City);Warped Wall;6;;;
6;Dallas;Finals (Regional/City);Quintuple Steps;1;;;
6;Dallas;Finals (Regional/City);Log Grip;2;;;
6;Dallas;Finals (Regional/City);Tilting Table;3;;;
6;Dallas;Finals (Regional/City);Swing Jump;4;;;
6;Dallas;Finals (Regional/City);Ring Toss;5;;;
6;Dallas;Finals (Regional/City);Warped Wall;6;;;
6;Dallas;Finals (Regional/City);Salmon Ladder;7;;;
6;Dallas;Finals (Regional/City);Swinging Frames;8;;;
6;Dallas;Finals (Regional/City);Pole Grasper;9;;;
6;Dallas;Finals (Regional/City);Spider Climb;10;;;
6;St. Louis;Qualifying (Regional/City);Quintuple Steps;1;;;
6;St. Louis;Qualifying (Regional/City);Rolling Log;2;;;
6;St. Louis;Qualifying (Regional/City);Bridge of Blades;3;;;
6;St. Louis;Qualifying (Regional/City);Rope Swing Into Cargo Net;4;;;
6;St. Louis;Qualifying (Regional/City);Double Tilt Ladder;5;;;
6;St. Louis;Qualifying (Regional/City);Warped Wall;6;;;
6;St. Louis;Finals (Regional/City);Quintuple Steps;1;;;
6;St. Louis;Finals (Regional/City);Rolling Log;2;;;
6;St. Louis;Finals (Regional/City);Bridge of Blades;3;;;
6;St. Louis;Finals (Regional/City);Rope Swing Into Cargo Net;4;;;
6;St. Louis;Finals (Regional/City);Double Tilt Ladder;5;;;
6;St. Louis;Finals (Regional/City);Warped Wall;6;;;
6;St. Louis;Finals (Regional/City);Salmon Ladder;7;;;
6;St. Louis;Finals (Regional/City);Rumbling Dice;8;;;
6;St. Louis;Finals (Regional/City);Crazy Cliffhanger;9;;;
6;St. Louis;Finals (Regional/City);Spider Climb;10;;;
6;Miami;Qualifying (Regional/City);Quintuple Steps;1;;;
6;Miami;Qualifying (Regional/City);Downhill Pipe Drop;2;;;
6;Miami;Qualifying (Regional/City);Dancing Stones;3;;;
6;Miami;Qualifying (Regional/City);Jump Hang;4;;;
6;Miami;Qualifying (Regional/City);Curtain Slider;5;;;
6;Miami;Qualifying (Regional/City);Warped Wall;6;;;
6;Miami;Finals (Regional/City);Quintuple Steps;1;;;
6;Miami;Finals (Regional/City);Downhill Pipe Drop;2;;;
6;Miami;Finals (Regional/City);Dancing Stones;3;;;
6;Miami;Finals (Regional/City);Jump Hang;4;;;
6;Miami;Finals (Regional/City);Curtain Slider;5;;;
6;Miami;Finals (Regional/City);Warped Wall;6;;;
6;Miami;Finals (Regional/City);Salmon Ladder;7;;;
6;Miami;Finals (Regional/City);Minefield;8;;;
6;Miami;Finals (Regional/City);Floating Stairs;9;;;
6;Miami;Finals (Regional/City);Spider Climb;10;;;
6;Denver;Qualifying (Regional/City);Quintuple Steps;1;;;
6;Denver;Qualifying (Regional/City);Cat Grab;2;;;
6;Denver;Qualifying (Regional/City);Spinning Log;3;;;
6;Denver;Qualifying (Regional/City);Spikes Into Cargo Net;4;;;
6;Denver;Qualifying (Regional/City);Devil Steps;5;;;
6;Denver;Qualifying (Regional/City);Warped Wall;6;;;
6;Denver;Finals (Regional/City);Quintuple Steps;1;;;
6;Denver;Finals (Regional/City);Cat Grab;2;;;
6;Denver;Finals (Regional/City);Spinning Log;3;;;
6;Denver;Finals (Regional/City);Spikes Into Cargo Net;4;;;
6;Denver;Finals (Regional/City);Devil Steps;5;;;
6;Denver;Finals (Regional/City);Warped Wall;6;;;
6;Denver;Finals (Regional/City);Salmon Ladder;7;;;
6;Denver;Finals (Regional/City);Arm Rings;8;;;
6;Denver;Finals (Regional/City);Doorknob Arch;9;;;
6;Denver;Finals (Regional/City);Spider Climb;10;;;
6;Las Vegas;National Finals - Stage 1;Piston Road;1;;;
6;Las Vegas;National Finals - Stage 1;Giant Ring;2;;;
6;Las Vegas;National Finals - Stage 1;Silk Slider;3;;;
6;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
6;Las Vegas;National Finals - Stage 1;Half-Pipe Attack;5;;;
6;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
6;Las Vegas;National Finals - Stage 1;Spinning Bridge;7;;;
6;Las Vegas;National Finals - Stage 1;Tarzan Rope;8;;;
6;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
6;Las Vegas;National Finals - Stage 2;Rope Jungle;1;;;
6;Las Vegas;National Finals - Stage 2;Double Salmon Ladder;2;;;
6;Las Vegas;National Finals - Stage 2;Unstable Bridge;3;;;
6;Las Vegas;National Finals - Stage 2;Butterfly Wall;4;;;
6;Las Vegas;National Finals - Stage 2;Metal Spin;5;;;
6;Las Vegas;National Finals - Stage 2;Wall Lift;6;;;
6;Las Vegas;National Finals - Stage 3;Cannonball Incline;1;;;
6;Las Vegas;National Finals - Stage 3;Doorknob Grasper;2;;;
6;Las Vegas;National Finals - Stage 3;Floating Boards;3;;;
6;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;4;;;
6;Las Vegas;National Finals - Stage 3;Propeller Bar;5;;;
6;Las Vegas;National Finals - Stage 3;Hang Climb;6;;;
6;Las Vegas;National Finals - Stage 3;Spider Flip;7;;;
6;Las Vegas;National Finals - Stage 3;Flying Bar;8;;;
6;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
7;Pittsburgh;Qualifying (Regional/City);Quintuple Steps;1;;;
7;Pittsburgh;Qualifying (Regional/City);Log Grip;2;;;
7;Pittsburgh;Qualifying (Regional/City);Snake Crossing;3;;;
7;Pittsburgh;Qualifying (Regional/City);Wind Chimes;4;;;
7;Pittsburgh;Qualifying (Regional/City);Devil Steps;5;;;
7;Pittsburgh;Qualifying (Regional/City);Warped Wall;6;;;
7;Pittsburgh;Finals (Regional/City);Quintuple Steps;1;;;
7;Pittsburgh;Finals (Regional/City);Log Grip;2;;;
7;Pittsburgh;Finals (Regional/City);Snake Crossing;3;;;
7;Pittsburgh;Finals (Regional/City);Wind Chimes;4;;;
7;Pittsburgh;Finals (Regional/City);Devil Steps;5;;;
7;Pittsburgh;Finals (Regional/City);Warped Wall;6;;;
7;Pittsburgh;Finals (Regional/City);Salmon Ladder;7;;;
7;Pittsburgh;Finals (Regional/City);Floating Monkey Bars;8;;;
7;Pittsburgh;Finals (Regional/City);Doorknob Arch;9;;;
7;Pittsburgh;Finals (Regional/City);Invisible Ladder;10;;;
7;Orlando;Qualifying (Regional/City);Quintuple Steps;1;;;
7;Orlando;Qualifying (Regional/City);Rolling Log;2;;;
7;Orlando;Qualifying (Regional/City);Paddle Boards;3;;;
7;Orlando;Qualifying (Regional/City);Tire Swing;4;;;
7;Orlando;Qualifying (Regional/City);Double Tilt Ladder;5;;;
7;Orlando;Qualifying (Regional/City);Warped Wall;6;;;
7;Orlando;Finals (Regional/City);Quintuple Steps;1;;;
7;Orlando;Finals (Regional/City);Rolling Log;2;;;
7;Orlando;Finals (Regional/City);Paddle Boards;3;;;
7;Orlando;Finals (Regional/City);Tire Swing;4;;;
7;Orlando;Finals (Regional/City);Double Tilt Ladder;5;;;
7;Orlando;Finals (Regional/City);Warped Wall;6;;;
7;Orlando;Finals (Regional/City);Salmon Ladder;7;;;
7;Orlando;Finals (Regional/City);Cannonball Alley;8;;;
7;Orlando;Finals (Regional/City);Double Helix;9;;;
7;Orlando;Finals (Regional/City);Invisible Ladder;10;;;
7;Kansas City;Qualifying (Regional/City);Quintuple Steps;1;;;
7;Kansas City;Qualifying (Regional/City);Big Dipper;2;;;
7;Kansas City;Qualifying (Regional/City);Floating Tiles;3;;;
7;Kansas City;Qualifying (Regional/City);(Modified) Ring Toss;4;;;
7;Kansas City;Qualifying (Regional/City);Bungee Road;5;;;
7;Kansas City;Qualifying (Regional/City);Warped Wall;6;;;
7;Kansas City;Finals (Regional/City);Quintuple Steps;1;;;
7;Kansas City;Finals (Regional/City);Big Dipper;2;;;
7;Kansas City;Finals (Regional/City);Floating Tiles;3;;;
7;Kansas City;Finals (Regional/City);(Modified) Ring Toss;4;;;
7;Kansas City;Finals (Regional/City);Bungee Road;5;;;
7;Kansas City;Finals (Regional/City);Warped Wall;6;;;
7;Kansas City;Finals (Regional/City);Salmon Ladder;7;;;
7;Kansas City;Finals (Regional/City);Flying Shelf Grab;8;;;
7;Kansas City;Finals (Regional/City);Body Prop;9;;;
7;Kansas City;Finals (Regional/City);Invisible Ladder;10;;;
7;Venice;Qualifying (Regional/City);Quintuple Steps;1;;;
7;Venice;Qualifying (Regional/City);Mini Silk Slider;2;;;
7;Venice;Qualifying (Regional/City);Tilting Table;3;;;
7;Venice;Qualifying (Regional/City);Spin Cycle;4;;;
7;Venice;Qualifying (Regional/City);Hourglass Drop;5;;;
7;Venice;Qualifying (Regional/City);Warped Wall;6;;;
7;Venice;Finals (Regional/City);Quintuple Steps;1;;;
7;Venice;Finals (Regional/City);Mini Silk Slider;2;;;
7;Venice;Finals (Regional/City);Tilting Table;3;;;
7;Venice;Finals (Regional/City);Spin Cycle;4;;;
7;Venice;Finals (Regional/City);Hourglass Drop;5;;;
7;Venice;Finals (Regional/City);Warped Wall;6;;;
7;Venice;Finals (Regional/City);Salmon Ladder;7;;;
7;Venice;Finals (Regional/City);Rumbling Dice;8;;;
7;Venice;Finals (Regional/City);Clear Climb;9;;;
7;Venice;Finals (Regional/City);Invisible Ladder;10;;;
7;Houston;Qualifying (Regional/City);Quintuple Steps;1;;;
7;Houston;Qualifying (Regional/City);Tilting Slider;2;;;
7;Houston;Qualifying (Regional/City);Spinning Log;3;;;
7;Houston;Qualifying (Regional/City);Cargo Crossing;4;;;
7;Houston;Qualifying (Regional/City);Swinging Spikes;5;;;
7;Houston;Qualifying (Regional/City);Warped Wall;6;;;
7;Houston;Finals (Regional/City);Quintuple Steps;1;;;
7;Houston;Finals (Regional/City);Tilting Slider;2;;;
7;Houston;Finals (Regional/City);Spinning Log;3;;;
7;Houston;Finals (Regional/City);Cargo Crossing;4;;;
7;Houston;Finals (Regional/City);Swinging Spikes;5;;;
7;Houston;Finals (Regional/City);Warped Wall;6;;;
7;Houston;Finals (Regional/City);Salmon Ladder;7;;;
7;Houston;Finals (Regional/City);Walking Bar;8;;;
7;Houston;Finals (Regional/City);Crazy Cliffhanger;9;;;
7;Houston;Finals (Regional/City);Invisible Ladder;10;;;
7;San Pedro (Military);Qualifying (Regional/City);Quintuple Steps;1;;;
7;San Pedro (Military);Qualifying (Regional/City);Jump Hang;2;;;
7;San Pedro (Military);Qualifying (Regional/City);Log Runner;3;;;
7;San Pedro (Military);Qualifying (Regional/City);Monkey Pegs;4;;;
7;San Pedro (Military);Qualifying (Regional/City);I-Beam Crossing;5;;;
7;San Pedro (Military);Qualifying (Regional/City);Warped Wall;6;;;
7;San Pedro (Military);Finals (Regional/City);Quintuple Steps;1;;;
7;San Pedro (Military);Finals (Regional/City);Jump Hang;2;;;
7;San Pedro (Military);Finals (Regional/City);Log Runner;3;;;
7;San Pedro (Military);Finals (Regional/City);Monkey Pegs;4;;;
7;San Pedro (Military);Finals (Regional/City);I-Beam Crossing;5;;;
7;San Pedro (Military);Finals (Regional/City);Warped Wall;6;;;
7;San Pedro (Military);Finals (Regional/City);Salmon Ladder;7;;;
7;San Pedro (Military);Finals (Regional/City);Swinging Frames;8;;;
7;San Pedro (Military);Finals (Regional/City);Globe Grasper;9;;;
7;San Pedro (Military);Finals (Regional/City);Invisible Ladder;10;;;
7;Las Vegas;National Finals - Stage 1;Piston Road;1;;;
7;Las Vegas;National Finals - Stage 1;Propeller Bar;2;;;
7;Las Vegas;National Finals - Stage 1;Silk Slider;3;;;
7;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
7;Las Vegas;National Finals - Stage 1;Sonic Curve;5;;;
7;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
7;Las Vegas;National Finals - Stage 1;Coin Flip;7;;;
7;Las Vegas;National Finals - Stage 1;Triple Swing;8;;;
7;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
7;Las Vegas;National Finals - Stage 2;Rope Jungle;1;;;
7;Las Vegas;National Finals - Stage 2;Double Salmon Ladder;2;;;
7;Las Vegas;National Finals - Stage 2;Unstable Bridge;3;;;
7;Las Vegas;National Finals - Stage 2;Butterfly Wall;4;;;
7;Las Vegas;National Finals - Stage 2;Roulette Row;5;;;
7;Las Vegas;National Finals - Stage 2;Wall Lift;6;;;
7;Las Vegas;National Finals - Stage 3;Psycho Chainsaw;1;;;
7;Las Vegas;National Finals - Stage 3;Doorknob Grasper;2;;;
7;Las Vegas;National Finals - Stage 3;Floating Boards;3;;;
7;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;4;;;
7;Las Vegas;National Finals - Stage 3;Pole Grasper;5;;;
7;Las Vegas;National Finals - Stage 3;Hang Climb;6;;;
7;Las Vegas;National Finals - Stage 3;Area 51;7;;;
7;Las Vegas;National Finals - Stage 3;Flying Bar;8;;;
7;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
8;Los Angeles;Qualifying (Regional/City);Floating Steps;1;;;
8;Los Angeles;Qualifying (Regional/City);Tick Tock;2;;;
8;Los Angeles;Qualifying (Regional/City);Escalator;3;;;
8;Los Angeles;Qualifying (Regional/City);Ring Jump;4;;;
8;Los Angeles;Qualifying (Regional/City);I-Beam Cross;5;;;
8;Los Angeles;Qualifying (Regional/City);Warped Wall;6;;;
8;Los Angeles;Finals (Regional/City);Floating Steps;1;;;
8;Los Angeles;Finals (Regional/City);Tick Tock;2;;;
8;Los Angeles;Finals (Regional/City);Escalator;3;;;
8;Los Angeles;Finals (Regional/City);Ring Jump;4;;;
8;Los Angeles;Finals (Regional/City);I-Beam Cross;5;;;
8;Los Angeles;Finals (Regional/City);Warped Wall;6;;;
8;Los Angeles;Finals (Regional/City);Salmon Ladder;7;;;
8;Los Angeles;Finals (Regional/City);The Wedge;8;;;
8;Los Angeles;Finals (Regional/City);Helix Hang;9;;;
8;Los Angeles;Finals (Regional/City);Invisible Ladder;10;;;
8;Atlanta;Qualifying (Regional/City);Floating Steps;1;;;
8;Atlanta;Qualifying (Regional/City);Big Dipper;2;;;
8;Atlanta;Qualifying (Regional/City);Block Run;3;;;
8;Atlanta;Qualifying (Regional/City);Spin Cycle;4;;;
8;Atlanta;Qualifying (Regional/City);Pipe Fitter;5;;;
8;Atlanta;Qualifying (Regional/City);Warped Wall;6;;;
8;Atlanta;Finals (Regional/City);Floating Steps;1;;;
8;Atlanta;Finals (Regional/City);Big Dipper;2;;;
8;Atlanta;Finals (Regional/City);Block Run;3;;;
8;Atlanta;Finals (Regional/City);Spin Cycle;4;;;
8;Atlanta;Finals (Regional/City);Pipe Fitter;5;;;
8;Atlanta;Finals (Regional/City);Warped Wall;6;;;
8;Atlanta;Finals (Regional/City);Salmon Ladder;7;;;
8;Atlanta;Finals (Regional/City);Floating Monkey Bars;8;;;
8;Atlanta;Finals (Regional/City);The Clacker;9;;;
8;Atlanta;Finals (Regional/City);Invisible Ladder;10;;;
8;Indianapolis;Qualifying (Regional/City);Floating Steps;1;;;
8;Indianapolis;Qualifying (Regional/City);Rolling Log;2;;;
8;Indianapolis;Qualifying (Regional/City);Fly Wheels;3;;;
8;Indianapolis;Qualifying (Regional/City);Disc Runner;4;;;
8;Indianapolis;Qualifying (Regional/City);Swinging Spikes;5;;;
8;Indianapolis;Qualifying (Regional/City);Warped Wall;6;;;
8;Indianapolis;Finals (Regional/City);Floating Steps;1;;;
8;Indianapolis;Finals (Regional/City);Rolling Log;2;;;
8;Indianapolis;Finals (Regional/City);Fly Wheels;3;;;
8;Indianapolis;Finals (Regional/City);Disc Runner;4;;;
8;Indianapolis;Finals (Regional/City);Swinging Spikes;5;;;
8;Indianapolis;Finals (Regional/City);Warped Wall;6;;;
8;Indianapolis;Finals (Regional/City);Salmon Ladder;7;;;
8;Indianapolis;Finals (Regional/City);Hourglass Drop;8;;;
8;Indianapolis;Finals (Regional/City);Circuit Board;9;;;
8;Indianapolis;Finals (Regional/City);Invisible Ladder;10;;;
8;Oklahoma City;Qualifying (Regional/City);Floating Steps;1;;;
8;Oklahoma City;Qualifying (Regional/City);Ring Swing;2;;;
8;Oklahoma City;Qualifying (Regional/City);Log Runner;3;;;
8;Oklahoma City;Qualifying (Regional/City);Tire Swing;4;;;
8;Oklahoma City;Qualifying (Regional/City);Bar Hop;5;;;
8;Oklahoma City;Qualifying (Regional/City);Warped Wall;6;;;
8;Oklahoma City;Finals (Regional/City);Floating Steps;1;;;
8;Oklahoma City;Finals (Regional/City);Ring Swing;2;;;
8;Oklahoma City;Finals (Regional/City);Log Runner;3;;;
8;Oklahoma City;Finals (Regional/City);Tire Swing;4;;;
8;Oklahoma City;Finals (Regional/City);Bar Hop;5;;;
8;Oklahoma City;Finals (Regional/City);Warped Wall;6;;;
8;Oklahoma City;Finals (Regional/City);Salmon Ladder;7;;;
8;Oklahoma City;Finals (Regional/City);Bungee Road;8;;;
8;Oklahoma City;Finals (Regional/City);Window Hang;9;;;
8;Oklahoma City;Finals (Regional/City);Invisible Ladder;10;;;
8;Philadelphia;Qualifying (Regional/City);Floating Steps;1;;;
8;Philadelphia;Qualifying (Regional/City);Log Grip;2;;;
8;Philadelphia;Qualifying (Regional/City);Paddle Boards;3;;;
8;Philadelphia;Qualifying (Regional/City);Wall Drop;4;;;
8;Philadelphia;Qualifying (Regional/City);Rolling Thunder;5;;;
8;Philadelphia;Qualifying (Regional/City);Warped Wall;6;;;
8;Philadelphia;Finals (Regional/City);Floating Steps;1;;;
8;Philadelphia;Finals (Regional/City);Log Grip;2;;;
8;Philadelphia;Finals (Regional/City);Paddle Boards;3;;;
8;Philadelphia;Finals (Regional/City);Wall Drop;4;;;
8;Philadelphia;Finals (Regional/City);Rolling Thunder;5;;;
8;Philadelphia;Finals (Regional/City);Warped Wall;6;;;
8;Philadelphia;Finals (Regional/City);Salmon Ladder;7;;;
8;Philadelphia;Finals (Regional/City);Flying Shelf Grab;8;;;
8;Philadelphia;Finals (Regional/City);Stair Hopper;9;;;
8;Philadelphia;Finals (Regional/City);Invisible Ladder;10;;;
8;Las Vegas;National Finals - Stage 1;Snake Run;1;;;
8;Las Vegas;National Finals - Stage 1;Propeller Bar;2;;;
8;Las Vegas;National Finals - Stage 1;Giant Log Grip;3;;;
8;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
8;Las Vegas;National Finals - Stage 1;Sonic Curve;5;;;
8;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
8;Las Vegas;National Finals - Stage 1;Broken Bridge;7;;;
8;Las Vegas;National Finals - Stage 1;Flying Squirrel;8;;;
8;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
8;Las Vegas;National Finals - Stage 2;Giant Ring Swing;1;;;
8;Las Vegas;National Finals - Stage 2;Down Up Salmon Ladder;2;;;
8;Las Vegas;National Finals - Stage 2;Wave Runner;3;;;
8;Las Vegas;National Finals - Stage 2;Butterfly Wall;4;;;
8;Las Vegas;National Finals - Stage 2;Double Wedge;5;;;
8;Las Vegas;National Finals - Stage 2;Wall Flip;6;;;
8;Las Vegas;National Finals - Stage 3;Keylock Hang;1;;;
8;Las Vegas;National Finals - Stage 3;Floating Boards;2;;;
8;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;3;;;
8;Las Vegas;National Finals - Stage 3;Curved Body Prop;4;;;
8;Las Vegas;National Finals - Stage 3;Hang Climb;5;;;
8;Las Vegas;National Finals - Stage 3;Walking Bar;6;;;
8;Las Vegas;National Finals - Stage 3;Flying Bar;8;;;
8;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
9;Los Angeles;Qualifying (Regional/City);Floating Steps;1;;;
9;Los Angeles;Qualifying (Regional/City);Cannonball Drop;2;;;
9;Los Angeles;Qualifying (Regional/City);Fly Wheels;3;;;
9;Los Angeles;Qualifying (Regional/City);Block Run;4;;;
9;Los Angeles;Qualifying (Regional/City);Battering Ram;5;;;
9;Los Angeles;Qualifying (Regional/City);Warped Wall;6;;;
9;Los Angeles;Finals (Regional/City);Floating Steps;1;;;
9;Los Angeles;Finals (Regional/City);Cannonball Drop;2;;;
9;Los Angeles;Finals (Regional/City);Fly Wheels;3;;;
9;Los Angeles;Finals (Regional/City);Block Run;4;;;
9;Los Angeles;Finals (Regional/City);Battering Ram;5;;;
9;Los Angeles;Finals (Regional/City);Warped Wall;6;;;
9;Los Angeles;Finals (Regional/City);Salmon Ladder;7;;;
9;Los Angeles;Finals (Regional/City);Swinging Peg Board;8;;;
9;Los Angeles;Finals (Regional/City);Stair Hopper;9;;;
9;Los Angeles;Finals (Regional/City);Elevator Climb;10;;;
9;San Antonio;Qualifying (Regional/City);Floating Steps;1;;;
9;San Antonio;Qualifying (Regional/City);Tick Tock;2;;;
9;San Antonio;Qualifying (Regional/City);Spinning Bridge;3;;;
9;San Antonio;Qualifying (Regional/City);Sky Hooks;4;;;
9;San Antonio;Qualifying (Regional/City);Pipe Fitter;5;;;
9;San Antonio;Qualifying (Regional/City);Warped Wall;6;;;
9;San Antonio;Finals (Regional/City);Floating Steps;1;;;
9;San Antonio;Finals (Regional/City);Tick Tock;2;;;
9;San Antonio;Finals (Regional/City);Spinning Bridge;3;;;
9;San Antonio;Finals (Regional/City);Sky Hooks;4;;;
9;San Antonio;Finals (Regional/City);Pipe Fitter;5;;;
9;San Antonio;Finals (Regional/City);Warped Wall;6;;;
9;San Antonio;Finals (Regional/City);Salmon Ladder;7;;;
9;San Antonio;Finals (Regional/City);Hourglass Drop;8;;;
9;San Antonio;Finals (Regional/City);Spinball Wizard;9;;;
9;San Antonio;Finals (Regional/City);Elevator Climb;10;;;
9;Daytona Beach;Qualifying (Regional/City);Floating Steps;1;;;
9;Daytona Beach;Qualifying (Regional/City);Rolling Pin;2;;;
9;Daytona Beach;Qualifying (Regional/City);Wingnuts;3;;;
9;Daytona Beach;Qualifying (Regional/City);Broken Bridge;4;;;
9;Daytona Beach;Qualifying (Regional/City);Rolling Thunder;5;;;
9;Daytona Beach;Qualifying (Regional/City);Warped Wall;6;;;
9;Daytona Beach;Finals (Regional/City);Floating Steps;1;;;
9;Daytona Beach;Finals (Regional/City);Rolling Pin;2;;;
9;Daytona Beach;Finals (Regional/City);Wingnuts;3;;;
9;Daytona Beach;Finals (Regional/City);Broken Bridge;4;;;
9;Daytona Beach;Finals (Regional/City);Rolling Thunder;5;;;
9;Daytona Beach;Finals (Regional/City);Warped Wall;6;;;
9;Daytona Beach;Finals (Regional/City);Salmon Ladder;7;;;
9;Daytona Beach;Finals (Regional/City);Giant Cubes;8;;;
9;Daytona Beach;Finals (Regional/City);Circuit Board;9;;;
9;Daytona Beach;Finals (Regional/City);Elevator Climb;10;;;
9;Kansas City;Qualifying (Regional/City);Floating Steps;1;;;
9;Kansas City;Qualifying (Regional/City);Hang Glider;2;;;
9;Kansas City;Qualifying (Regional/City);Broken Pipes;3;;;
9;Kansas City;Qualifying (Regional/City);Crank It Up;4;;;
9;Kansas City;Qualifying (Regional/City);Bar Hop;5;;;
9;Kansas City;Qualifying (Regional/City);Warped Wall;6;;;
9;Kansas City;Finals (Regional/City);Floating Steps;1;;;
9;Kansas City;Finals (Regional/City);Hang Glider;2;;;
9;Kansas City;Finals (Regional/City);Broken Pipes;3;;;
9;Kansas City;Finals (Regional/City);Crank It Up;4;;;
9;Kansas City;Finals (Regional/City);Bar Hop;5;;;
9;Kansas City;Finals (Regional/City);Warped Wall;6;;;
9;Kansas City;Finals (Regional/City);Salmon Ladder;7;;;
9;Kansas City;Finals (Regional/City);Floating Monkey Bars;8;;;
9;Kansas City;Finals (Regional/City);Iron Maiden;9;;;
9;Kansas City;Finals (Regional/City);Elevator Climb;10;;;
9;Cleveland;Qualifying (Regional/City);Floating Steps;1;;;
9;Cleveland;Qualifying (Regional/City);Rolling Log;2;;;
9;Cleveland;Qualifying (Regional/City);Razor's Edge;3;;;
9;Cleveland;Qualifying (Regional/City);Ring Jump;4;;;
9;Cleveland;Qualifying (Regional/City);I-Beam Gap;5;;;
9;Cleveland;Qualifying (Regional/City);Warped Wall;6;;;
9;Cleveland;Finals (Regional/City);Floating Steps;1;;;
9;Cleveland;Finals (Regional/City);Rolling Log;2;;;
9;Cleveland;Finals (Regional/City);Razor's Edge;3;;;
9;Cleveland;Finals (Regional/City);Ring Jump;4;;;
9;Cleveland;Finals (Regional/City);I-Beam Gap;5;;;
9;Cleveland;Finals (Regional/City);Warped Wall;6;;;
9;Cleveland;Finals (Regional/City);Salmon Ladder;7;;;
9;Cleveland;Finals (Regional/City);Nail Clipper;8;;;
9;Cleveland;Finals (Regional/City);The Clacker;9;;;
9;Cleveland;Finals (Regional/City);Elevator Climb;10;;;
9;Denver;Qualifying (Regional/City);Floating Steps;1;;;
9;Denver;Qualifying (Regional/City);Ring Swing;2;;;
9;Denver;Qualifying (Regional/City);Bouncing Spider;3;;;
9;Denver;Qualifying (Regional/City);Paddle Boards;4;;;
9;Denver;Qualifying (Regional/City);Rail Runner;5;;;
9;Denver;Qualifying (Regional/City);Warped Wall;6;;;
9;Denver;Finals (Regional/City);Floating Steps;1;;;
9;Denver;Finals (Regional/City);Ring Swing;2;;;
9;Denver;Finals (Regional/City);Bouncing Spider;3;;;
9;Denver;Finals (Regional/City);Paddle Boards;4;;;
9;Denver;Finals (Regional/City);Rail Runner;5;;;
9;Denver;Finals (Regional/City);Warped Wall;6;;;
9;Denver;Finals (Regional/City);Salmon Ladder;7;;;
9;Denver;Finals (Regional/City);The Wedge;8;;;
9;Denver;Finals (Regional/City);Ninjago Roll;9;;;
9;Denver;Finals (Regional/City);Elevator Climb;10;;;
9;Las Vegas;National Finals - Stage 1;Snake Run;1;;;
9;Las Vegas;National Finals - Stage 1;Propeller Bar;2;;;
9;Las Vegas;National Finals - Stage 1;Double Dipper;3;;;
9;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
9;Las Vegas;National Finals - Stage 1;Parkour Run;5;;;
9;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
9;Las Vegas;National Finals - Stage 1;Domino Pipes;7;;;
9;Las Vegas;National Finals - Stage 1;Flying Squirrel;8;;;
9;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
9;Las Vegas;National Finals - Stage 2;Giant Ring Swing;1;;;
9;Las Vegas;National Finals - Stage 2;Criss Cross Salmon Ladder;2;;;
9;Las Vegas;National Finals - Stage 2;Wave Runner;3;;;
9;Las Vegas;National Finals - Stage 2;Swing Surfer;4;;;
9;Las Vegas;National Finals - Stage 2;Wingnut Alley;5;;;
9;Las Vegas;National Finals - Stage 2;Wall Flip;6;;;
9;Las Vegas;National Finals - Stage 3;Floating Boards;1;;;
9;Las Vegas;National Finals - Stage 3;Keylock Hang;2;;;
9;Las Vegas;National Finals - Stage 3;Nail Clipper;3;;;
9;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;4;;;
9;Las Vegas;National Finals - Stage 3;Curved Body Prop;5;;;
9;Las Vegas;National Finals - Stage 3;Peg Cloud;6;;;
9;Las Vegas;National Finals - Stage 3;Time Bomb;7;;;
9;Las Vegas;National Finals - Stage 3;Flying Bar;8;;;
9;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
10;Los Angeles;Qualifying (Regional/City);Floating Steps;1;;;
10;Los Angeles;Qualifying (Regional/City);Jumper Cables;2;;;
10;Los Angeles;Qualifying (Regional/City);Spinning Bridge;3;;;
10;Los Angeles;Qualifying (Regional/City);Sky Hooks;4;;;
10;Los Angeles;Qualifying (Regional/City);Doorknob Drop;5;;;
10;Los Angeles;Qualifying (Regional/City);Warped Wall / Mega Wall;6;;;
10;Los Angeles;Finals (Regional/City);Archer Steps;1;;;
10;Los Angeles;Finals (Regional/City);Jumper Cables;2;;;
10;Los Angeles;Finals (Regional/City);Spinning Bridge;3;;;
10;Los Angeles;Finals (Regional/City);Flying Shelf Grab;4;;;
10;Los Angeles;Finals (Regional/City);Doorknob Drop;5;;;
10;Los Angeles;Finals (Regional/City);Warped Wall;6;;;
10;Los Angeles;Finals (Regional/City);Salmon Ladder;7;;;
10;Los Angeles;Finals (Regional/City);Giant Cubes;8;;;
10;Los Angeles;Finals (Regional/City);Baton Pass;9;;;
10;Los Angeles;Finals (Regional/City);Spider Trap;10;;;
10;Dallas;Qualifying (Regional/City);Floating Steps;1;;;
10;Dallas;Qualifying (Regional/City);Catch & Release;2;;;
10;Dallas;Qualifying (Regional/City);Bouncing Spider;3;;;
10;Dallas;Qualifying (Regional/City);Tuning Forks;4;;;
10;Dallas;Qualifying (Regional/City);Crank It Up;5;;;
10;Dallas;Qualifying (Regional/City);Warped Wall / Mega Wall;6;;;
10;Dallas;Finals (Regional/City);Archer Steps;1;;;
10;Dallas;Finals (Regional/City);Catch & Release;2;;;
10;Dallas;Finals (Regional/City);Bouncing Spider;3;;;
10;Dallas;Finals (Regional/City);Broken Bridge;4;;;
10;Dallas;Finals (Regional/City);Crank It Up;5;;;
10;Dallas;Finals (Regional/City);Warped Wall;6;;;
10;Dallas;Finals (Regional/City);Salmon Ladder;7;;;
10;Dallas;Finals (Regional/City);Nail Clipper;8;;;
10;Dallas;Finals (Regional/City);Fallout;9;;;
10;Dallas;Finals (Regional/City);Spider Trap;10;;;
10;Miami;Qualifying (Regional/City);Floating Steps;1;;;
10;Miami;Qualifying (Regional/City);Fly Wheels;2;;;
10;Miami;Qualifying (Regional/City);Razor's Edge;3;;;
10;Miami;Qualifying (Regional/City);Ring Turn;4;;;
10;Miami;Qualifying (Regional/City);Slippery Summit;5;;;
10;Miami;Qualifying (Regional/City);Warped Wall / Mega Wall;6;;;
10;Miami;Finals (Regional/City);Archer Steps;1;;;
10;Miami;Finals (Regional/City);Cannonball Drop;2;;;
10;Miami;Finals (Regional/City);Razor's Edge;3;;;
10;Miami;Finals (Regional/City);Ring Turn;4;;;
10;Miami;Finals (Regional/City);Slippery Summit;5;;;
10;Miami;Finals (Regional/City);Warped Wall;6;;;
10;Miami;Finals (Regional/City);Salmon Ladder;7;;;
10;Miami;Finals (Regional/City);Crazy Clocks;8;;;
10;Miami;Finals (Regional/City);Stair Hopper;9;;;
10;Miami;Finals (Regional/City);Spider Trap;10;;;
10;Indianapolis;Qualifying (Regional/City);Floating Steps;1;;;
10;Indianapolis;Qualifying (Regional/City);Cannonball Drop;2;;;
10;Indianapolis;Qualifying (Regional/City);Wheel Flip;3;;;
10;Indianapolis;Qualifying (Regional/City);Block Run;4;;;
10;Indianapolis;Qualifying (Regional/City);Spin Hopper;5;;;
10;Indianapolis;Qualifying (Regional/City);Warped Wall / Mega Wall;6;;;
10;Indianapolis;Finals (Regional/City);Archer Steps;1;;;
10;Indianapolis;Finals (Regional/City);Fly Wheels;2;;;
10;Indianapolis;Finals (Regional/City);Wheel Flip;3;;;
10;Indianapolis;Finals (Regional/City);Block Run;4;;;
10;Indianapolis;Finals (Regional/City);Spin Hopper;5;;;
10;Indianapolis;Finals (Regional/City);Warped Wall;6;;;
10;Indianapolis;Finals (Regional/City);Salmon Ladder;7;;;
10;Indianapolis;Finals (Regional/City);The Clacker;8;;;
10;Indianapolis;Finals (Regional/City);Cane Lane;9;;;
10;Indianapolis;Finals (Regional/City);Spider Trap;10;;;
10;Philadelphia;Qualifying (Regional/City);Floating Steps;1;;;
10;Philadelphia;Qualifying (Regional/City);Spinning Bowties;2;;;
10;Philadelphia;Qualifying (Regional/City);Broken Bridge;3;;;
10;Philadelphia;Qualifying (Regional/City);Wingnuts;4;;;
10;Philadelphia;Qualifying (Regional/City);Lightning Bolts;5;;;
10;Philadelphia;Qualifying (Regional/City);Warped Wall / Mega Wall;6;;;
10;Philadelphia;Finals (Regional/City);Archer Steps;1;;;
10;Philadelphia;Finals (Regional/City);Spinning Bowties;2;;;
10;Philadelphia;Finals (Regional/City);Broken Bridge;3;;;
10;Philadelphia;Finals (Regional/City);Wingnuts;4;;;
10;Philadelphia;Finals (Regional/City);Lightning Bolts;5;;;
10;Philadelphia;Finals (Regional/City);Warped Wall;6;;;
10;Philadelphia;Finals (Regional/City);Salmon Ladder;7;;;
10;Philadelphia;Finals (Regional/City);Captain's Wheel;8;;;
10;Philadelphia;Finals (Regional/City);Spinball Wizard;9;;;
10;Philadelphia;Finals (Regional/City);Spider Trap;10;;;
10;Minneapolis;Qualifying (Regional/City);Floating Steps;1;;;
10;Minneapolis;Qualifying (Regional/City);Double Twister;2;;;
10;Minneapolis;Qualifying (Regional/City);Ring Jump;3;;;
10;Minneapolis;Qualifying (Regional/City);Diamond Dash;4;;;
10;Minneapolis;Qualifying (Regional/City);Battering Ram;5;;;
10;Minneapolis;Qualifying (Regional/City);Warped Wall / Mega Wall;6;;;
10;Minneapolis;Finals (Regional/City);Archer Steps;1;;;
10;Minneapolis;Finals (Regional/City);Double Twister;2;;;
10;Minneapolis;Finals (Regional/City);Sky Hooks;3;;;
10;Minneapolis;Finals (Regional/City);Diamond Dash;4;;;
10;Minneapolis;Finals (Regional/City);Battering Ram;5;;;
10;Minneapolis;Finals (Regional/City);Warped Wall;6;;;
10;Minneapolis;Finals (Regional/City);Salmon Ladder;7;;;
10;Minneapolis;Finals (Regional/City);The Hinge;8;;;
10;Minneapolis;Finals (Regional/City);Iron Maiden;9;;;
10;Minneapolis;Finals (Regional/City);Spider Trap;10;;;
10;Las Vegas;National Finals - Stage 1;Archer Alley;1;;;
10;Las Vegas;National Finals - Stage 1;Propeller Bar;2;;;
10;Las Vegas;National Finals - Stage 1;Double Dipper;3;;;
10;Las Vegas;National Finals - Stage 1;Jumping Spider;4;;;
10;Las Vegas;National Finals - Stage 1;Jeep Run;5;;;
10;Las Vegas;National Finals - Stage 1;Warped Wall;6;;;
10;Las Vegas;National Finals - Stage 1;Razor Beams;7;;;
10;Las Vegas;National Finals - Stage 1;Twist & Fly;8;;;
10;Las Vegas;National Finals - Stage 1;Rope Ladder;9;;;
10;Las Vegas;National Finals - Stage 2;Epic Catch & Release;1;;;
10;Las Vegas;National Finals - Stage 2;Criss Cross Salmon Ladder;2;;;
10;Las Vegas;National Finals - Stage 2;Deja Vu;3;;;
10;Las Vegas;National Finals - Stage 2;Swing Surfer;4;;;
10;Las Vegas;National Finals - Stage 2;Wingnut Alley;5;;;
10;Las Vegas;National Finals - Stage 2;Water Walls;6;;;
10;Las Vegas;National Finals - Stage 3;Floating Boards;1;;;
10;Las Vegas;National Finals - Stage 3;En Garde;2;;;
10;Las Vegas;National Finals - Stage 3;Crazy Clocks;3;;;
10;Las Vegas;National Finals - Stage 3;Ultimate Cliffhanger;4;;;
10;Las Vegas;National Finals - Stage 3;Curved Body Prop;5;;;
10;Las Vegas;National Finals - Stage 3;Peg Cloud;6;;;
10;Las Vegas;National Finals - Stage 3;Time Bomb;7;;;
10;Las Vegas;National Finals - Stage 3;Cane Lane;8;;;
10;Las Vegas;National Finals - Stage 4;Rope Climb;1;;;
;;;;;;;
;;;;;;;
;;Jumping;14;;;;
;;Wall;86;;;;
;;Ladder;10;41;;;
;;Steps;16;32;7;28;6
;;Rope;4;9;2;;
;;Slider;1;11;4;2;3
;;;;;;;
;;;;;;;
;;;;;;;
;;;;;;;
;;;;;;;
;;;;;;;
;;;;;;;`
// Transformation données CSV ; en tableau--------------------------------------------------------------------------
function csvToArray(str, delimiter = ";") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
  return arr;
}
const dataNinja = csvToArray(csvData)

// Nb occurences Warped Wall
let count1 = {
  name: 'Warped Wall',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Obstacle_Name === 'Warped Wall')
    count1.count++
})
// Nb occurences Salmon Ladder
let count2 = {
  name: 'Salmon Ladder',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Obstacle_Name === 'Salmon Ladder')
    count2.count++
})
// Nb occurences Quintuple Steps
let count3 = {
  name: 'Quintuple Steps',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Obstacle_Name === 'Quintuple Steps')
    count3.count++
})
// Nb occurences Jumping Spider
let count4 = {
  name: 'Jumping Spider',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Obstacle_Name === 'Jumping Spider')
    count4.count++
})
// Nb occurences Jumping Spider
let count5 = {
  name: 'Rope Ladder',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Obstacle_Name === 'Rope Ladder')
    count5.count++
})

// 1er graph-----------------------------------------------------------------------------------------------------
// BarChart
const ninjadonnees = [count1, count2, count3, count4, count5]

const margin = { top: 20, right: 20, bottom: 20, left: 20 }
width = 0.6 * window.innerWidth - margin.left - margin.right
height = 0.8 * window.innerHeight - margin.top - margin.bottom
const barchart = d3.select("#barChart")
  .append('svg')
  .attr("width", width + 400)
  .attr("height", height + 200)
  .append("g")
  .attr("transform", `translate(${margin.left + 200},${margin.top + 20})`)

// Axe X
let x = d3.scaleBand()
  .range([0, width])
  .domain(ninjadonnees.map(d => d.name))
  .padding(0.25)
barchart.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

// Axe Y
let y = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
barchart.append("g")
  .call(d3.axisLeft(y))
  .call(g => g.append("text")
    .attr("x", -190)
    .attr("y", -27)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .text("Nombre d'occurences"));

// Dessin du graphique
barchart.selectAll("rect")
  .data(ninjadonnees)
  .join("rect")
  .attr('fill', "#140F9D")
  .attr("x", d => x(d.name))
  .attr("y", d => y(d.count))
  .attr("width", x.bandwidth())
  .attr("height", d => height - y(d.count))
  .on("mouseover", function (d) {
    d3.select(this)
      .style("opacity", 0.6)
      .append("title")
      .text(function (d) {
        return d.count
      })
  })
  .on("mouseout", function (d) {
    d3.select(this)
      .style("opacity", 1)
  })
  .attr("height", d => height - y(0))
  .attr("y", d => y(0))

// Animation graphe
d3.select('button').on('click', function (d, i) {
  barchart.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("y", d => y(d.count))
    .attr("height", d => height / 1.76 - y(d.count))
    .delay((d, i) => { console.log(i); return i * 100 })
})
d3.select('#effacer').on('click', function (d, i) {
  barchart.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("height", d => height - height)
    .attr("y", d => y(0))
    .delay((d, i) => { console.log(i); return i * 100 })
})

// 2ème graph-----------------------------------------------------------------------------------------------------
// Légendes
d3.select("body").append("div").attr("class", "monSVG");
let width = 800
let height = 1000

// Créa SVG
const monSVG = d3.select("#monSVG")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

// Def groupes
const groupe1 = monSVG.append('g')
const groupe2 = monSVG.append('g')
const groupe3 = monSVG.append('g')
const groupe4 = monSVG.append('g')
const groupe5 = monSVG.append('g')
const groupe6 = monSVG.append('g')
const groupe7 = monSVG.append('g')
const groupe8 = monSVG.append('g')
const groupe9 = monSVG.append('g')
const groupe10 = monSVG.append('g')

//groupe 1
groupe1
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#D99B9B')
  .attr('id', 'Saison1')
groupe1
  .append("text")
  .text("Saison 1")
  .attr("x", "30")
  .attr("y", "15")
  .attr("fill", "#ffffff")

//groupe 2
groupe2
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#EECDB4')
  .attr('id', 'Saison2')
  .attr("y", "25")
groupe2
  .append("text")
  .text("Saison 2")
  .attr("x", "30")
  .attr("y", "40")
  .attr("fill", "#ffffff")

//groupe 3
groupe3
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#DFDAAE')
  .attr('id', 'Saison3')
  .attr("y", "50")
groupe3
  .append("text")
  .text("Saison 3")
  .attr("x", "30")
  .attr("y", "65")
  .attr("fill", "#ffffff")

//groupe 4
groupe4
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#CAE384')
  .attr('id', 'Saison4')
  .attr("y", "75")
groupe4
  .append("text")
  .text("Saison 4")
  .attr("x", "30")
  .attr("y", "90")
  .attr("fill", "#ffffff")

//groupe 5
groupe5
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#B4EEBE')
  .attr('id', 'Saison5')
  .attr("y", "100")
groupe5
  .append("text")
  .text("Saison 5")
  .attr("x", "30")
  .attr("y", "115")
  .attr("fill", "#ffffff")

//groupe 6
groupe6
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#B4EBEE')
  .attr('id', 'Saison6')
  .attr("y", "125")
groupe6
  .append("text")
  .text("Saison 6")
  .attr("x", "30")
  .attr("y", "140")
  .attr("fill", "#ffffff")

//groupe 7
groupe7
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#B4CBEE')
  .attr('id', 'Saison7')
  .attr("y", "150")
groupe7
  .append("text")
  .text("Saison 7")
  .attr("x", "30")
  .attr("y", "165")
  .attr("fill", "#ffffff")

//groupe 8
groupe8
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#CEB4EE')
  .attr('id', 'Saison8')
  .attr("y", "175")
groupe8
  .append("text")
  .text("Saison 8")
  .attr("x", "30")
  .attr("y", "190")
  .attr("fill", "#ffffff")

//groupe 9
groupe9
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#EEB4DE')
  .attr('id', 'Saison9')
  .attr("y", "200")
groupe9
  .append("text")
  .text("Saison 9")
  .attr("x", "30")
  .attr("y", "215")
  .attr("fill", "#ffffff")

//groupe 10
groupe10
  .append("rect")
  .attr("height", "20")
  .attr("width", "20")
  .attr("fill", '#B06F6F')
  .attr('id', 'Saison10')
  .attr("y", "225")
groupe10
  .append("text")
  .text("Saison 10")
  .attr("x", "30")
  .attr("y", "240")
  .attr("fill", "#ffffff")

// Nb obstacles Saison 1
let nbObstacleS1 = {
  saison: 'Saison 1',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '1')
    nbObstacleS1.count++
})
// Nb obstacles Saison 2
let nbObstacleS2 = {
  saison: 'Saison 2',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '2')
    nbObstacleS2.count++
})
// Nb obstacles Saison 3
let nbObstacleS3 = {
  saison: 'Saison 3',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '3')
    nbObstacleS3.count++
})
// Nb obstacles Saison 4
let nbObstacleS4 = {
  saison: 'Saison 4',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '4')
    nbObstacleS4.count++
})
// Nb obstacles Saison 5
let nbObstacleS5 = {
  saison: 'Saison 5',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '5')
    nbObstacleS5.count++
})
// Nb obstacles Saison 6
let nbObstacleS6 = {
  saison: 'Saison 6',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '6')
    nbObstacleS6.count++
})
// Nb obstacles Saison 7
let nbObstacleS7 = {
  saison: 'Saison 7',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '7')
    nbObstacleS7.count++
})
// Nb obstacles Saison 8
let nbObstacleS8 = {
  saison: 'Saison 8',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '8')
    nbObstacleS8.count++
})
// Nb obstacles Saison 9
let nbObstacleS9 = {
  saison: 'Saison 9',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '9')
    nbObstacleS9.count++
})
// Nb obstacles Saison 10
let nbObstacleS10 = {
  saison: 'Saison 10',
  count: 0
}
dataNinja.forEach(e => {
  if (e.Season === '10')
    nbObstacleS10.count++
})

// Début création graph
const dataCircle = [nbObstacleS1, nbObstacleS2, nbObstacleS3, nbObstacleS4, nbObstacleS5, nbObstacleS6, nbObstacleS7, nbObstacleS8, nbObstacleS9, nbObstacleS10]
const margin2 = { top: 10, right: 10, bottom: 10, left: 10 },
  innerRadius = 30,
  outerRadius = Math.min(width, height) / 4

const container2 = d3.select("#circBarPlot")
const circBarPlot = container2.append('svg')
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2 + 100})`); // +100 car les bar du haut sont plus longues (upperBar)

// échelle axe X
let x2 = d3.scaleBand()
  .range([0, 2 * Math.PI])    // Axe X va de 0 à 2pi pour faire le tour du cercle
  .align(0)
  .domain(dataCircle.map(d => d.saison)) // Liste des saisons

// échelle axe Y
let y2 = d3.scaleRadial()
  .range([innerRadius, outerRadius])
  .domain([0, 150]); // Domaine du Y est de 0 au max des données


// Dessin des barres
circBarPlot.append("g") //groupe
  .selectAll("path")
  .data(dataCircle)
  .join("path")
  .attr("fill", function (d, i) {
    if (dataCircle[i].saison == 'Saison 1') {
      return "#D99B9B"
    } if (dataCircle[i].saison == 'Saison 2') {
      return "#EECDB4"
    } if (dataCircle[i].saison == 'Saison 3') {
      return "#DFDAAE"
    } if (dataCircle[i].saison == 'Saison 4') {
      return "#CAE384"
    } if (dataCircle[i].saison == 'Saison 5') {
      return "#B4EEBE"
    } if (dataCircle[i].saison == 'Saison 6') {
      return "#B4EBEE"
    } if (dataCircle[i].saison == 'Saison 7') {
      return "#B4CBEE"
    } if (dataCircle[i].saison == 'Saison 8') {
      return "#CEB4EE"
    } if (dataCircle[i].saison == 'Saison 9') {
      return "#EEB4DE"
    } else {
      return "#B06F6F"
    }
  })

  .attr("d", d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(d => y2(d['count']))
    .startAngle(d => x2(d.saison))
    .endAngle(d => x2(d.saison) + x2.bandwidth())
    .padAngle(0.08)
    .padRadius(innerRadius))
  .on("mouseover", function (d) {
    d3.select(this)
      .style("opacity", 0.6)
      .append("title")
      .text(function (d) {
        return d.count
      })
  })
  .on("mouseout", function (d) {
    d3.select(this)
      .style("opacity", 1)
  })

// 3ème graph-----------------------------------------------------------------------------------------------------
const steps = ['Quintuple Steps', 'Devil Steps', 'Quad Steps', 'Floating Steps', ' Archer Steps']
const salmon = ['Salmon Ladder', 'Double Salmon ladder', 'Down Up Salmon Ladder', 'Criss Cross Salmon Ladder']
const wall = ['Warped Wall', 'Butterfly Wall', 'Mega Wall', 'Water Wall']
const cannonball = ['Cannonball Alley', 'Cannonball Incline', 'Cannonball drop']

const evol = [
  { nom: "Steps", value: steps.length },
  { nom: "Salmon", value: salmon.length },
  { nom: "Wall", value: wall.length },
  { nom: "Cannonball", value: cannonball.length }]

// BarChart
const margin3 = { top: 50, right: 20, bottom: 100, left: 180 }
let width3 = 0.55 * window.innerWidth - margin.left - margin.right
let height3 = 0.7 * window.innerHeight - margin.top - margin.bottom

const barchart2 = d3.select("#dernierGraph")
  .append('svg')
  .attr("width", width3 + margin3.left + margin3.right)
  .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
  .attr("transform", `translate(${margin3.left},${margin3.top})`)

// Axe X
let x3 = d3.scaleBand()
  .range([0, width3])
  .domain(evol.map(d => d.nom))
  .padding(0.2)
barchart2.append("g")
  .attr("transform", `translate(0, ${height3})`)
  .call(d3.axisBottom(x3))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end")

// Axe Y
let y3 = d3.scaleLinear()
  .domain([0, 10])
  .range([height3, 0])
barchart2.append("g")
  .call(d3.axisLeft(y3))
  .call(g => g.append("text")
    .attr("x", -160)
    .attr("y", -20)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .text("Nombre d'évolutions"))

// Dessin du graphique
barchart2.selectAll("rect")
  .data(evol)
  .join("rect")
  .attr('fill', '#EF1522')
  .attr('x', d => x3(d.nom))
  .attr('y', d => y3(d.value))
  .attr('width', x3.bandwidth())
  .attr("height", d => height3 - y3(d.value))
  .on("mouseover", function (d) {
    d3.select(this)
      .style("opacity", 0.5)
      .append("title")
      .text(function (d) {
        return d.value
      })
  })
  .on("mouseout", function (d) {
    d3.select(this)
      .style("opacity", 1)
  })
  .attr("height", d => height3 - y(0))
  .attr("y", d => y(0))

// Animation graphe
d3.select('#animer2').on('click', function (d, i) {
  barchart2.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("y", d => y3(d.value))
    .attr("height", d => height3 - y3(d.value))
    .delay((d, i) => { console.log(i); return i * 100 })
})
d3.select('#effacer2').on('click', function (d, i) {
  barchart2.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("height", d => height3 - height3)
    .attr("y", d => y3(0))
    .delay((d, i) => { console.log(i); return i * 100 })
})