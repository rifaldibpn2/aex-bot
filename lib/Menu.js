const Menu = (prefix, name) => new Promise((resolve, reject) => {
	resolve(`Halo @${name}!

    🍜 *PAIMON BOT* 🍜

🛠️ Main Menu
 ┠ *${prefix}menu*
 ┠ *${prefix}about*
 ╰ *${prefix}krisar [isi kritik dan saran]*

🛠️ Group Menu
 ┠ *${prefix}promote [@tagmember]* admin only
 ┠ *${prefix}demote [@tagmember]* admin only
 ┠ *${prefix}add [number]* admin only
 ┠ *${prefix}kick [@tagmember]* admin only
 ┠ *${prefix}kickall* admin only
 ┠ *${prefix}mentionall*
 ┠ *${prefix}glink*
 ╰ *${prefix}del*

🛠️ Other Menu
 ┠ *${prefix}quotes*
 ┠ *${prefix}toxic*
 ┠ *${prefix}randomanime*
 ┠ *${prefix}js [kota]*
 ┠ *${prefix}tts [kode bahasa] [text]*
 ┠ *${prefix}stiker*
 ┠ *${prefix}nulis [tulisan yang ingin kamu tulis]*
 ┠ *${prefix}translate [kode bahasa] [text]*
 ╿
 ╰╼ Semua Command memakai *[ $ ]*

		`)
})

module.exports = Menu
