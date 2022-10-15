const stateDefault = {
    taiXiu: true, //True: là tài (từ 3->11), false là xỉu (12<)
    array_dice: [
        { id: 1, image: './img/1.png' },
        { id: 1, image: './img/1.png' },
        { id: 1, image: './img/1.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}
const StateGameDice = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.taiXiu = action.taiXiu;
            return {...state}
        }
        case 'PLAY_GAME': {
            // ramdom dice
            let array_dice_random = [];
            for (let i = 0; i < 3; i++) {
                //Mỗi lần lặp random ra số ngẫu nhiên từ 1 -> 6
                let id_random = Math.floor(Math.random() * 6) + 1;
                //Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
                let diceRandom = { id: id_random, image: `./img/${id_random}.png` };
                //Push vào mảng xúc xắc ngẫu nhiên
                array_dice_random.push(diceRandom);
            }
            //Gán state array_dice = array_dice_random
            state.array_dice = array_dice_random;
            //Xử lý tăng bàn chơi
            state.tongSoBanChoi += 1;
             //Xử lý số bàn thắng            
             let tongSoDiem = array_dice_random.reduce((tongDiem, dice) => {
                return tongDiem += dice.id;               
            }, 0);
            //Xét điều kiện để người dùng thắng game
            if ((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem<=11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }
            return {...state}
        }
        default: return {...state}
    }
}

export default StateGameDice;