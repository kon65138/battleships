import './style.css';
import { Ship, GameBoard, Player } from './modules/gameClasses.js';
import { createGrid } from './modules/domFunctions.js';

createGrid('.computerGrid');
createGrid('.playerGrid');
