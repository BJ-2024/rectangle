player.onChat("run", function () {
	
})
for (let index = 0; index < 2; index++) {
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.move(FORWARD, 5)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
}
