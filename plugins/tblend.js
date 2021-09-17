/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('conventer');


Amdi.applyCMD({pattern: 'tblend ?(.*)', fromMe: LOL, desc: Lang.T_DESC,  deleteCommand: false}, (async (message, match) => {    
        
        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CAP , thumbnail: thumb , quoted: message.data});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
}));

    const thumb = "/9j/4AAQSkZJRgABAQEASABIAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAjwCPAMBEQACEQEDEQH/xAAeAAEAAgMBAQEBAQAAAAAAAAAACQoHCAsGBQQDAv/EAEcQAAEEAgIBAQUCCAoIBwEAAAADBAUGAgcBCAkKEhMUFRYRFxkaOVl4mNfYGDg6V1h3iJe3uCQlN0mWqLW2ISIjJic2yHb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A5/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"