import $ from 'jquery';
import {
    Engine,
    Render,
    Bodies,
    World,
} from 'matter-js';

$(document).ready(() => {
    console.log(document);
    const engine = Engine.create();
    
    var render = Render.create({
        element: document.body,
        engine: engine
    });
    
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    
    World.add(engine.world, [boxA, boxB, ground]);
    
    Engine.run(engine);
    
    Render.run(render);
})
