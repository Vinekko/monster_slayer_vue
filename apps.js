function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
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
            this.currentRound++;
            const damageValue =  getRandomValue(8, 15);
            this.playerHealth -= damageValue;
        },
        specialAttack() {
            const damageValue =  getRandomValue(10, 25);
            this.monsterHealth -= damageValue;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
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
        },
        specialAttackEnabled() {
            return this.currentRound % 3 !== 0;
        }
    }
});

app.mount('#game');