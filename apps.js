function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    methods: {
        attackMonster() {
            const damageValue =  getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - damageValue;
            //this.playerHealth -= 10;
            this.attackPlayer();
        },
        attackPlayer() {
            const damageValue =  getRandomValue(8, 15);
            this.playerHealth -= damageValue;
        }
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerBarStyles() {
            return {
                width: this.playerHealth + '%'
            }
        }
    }
});

app.mount('#game');