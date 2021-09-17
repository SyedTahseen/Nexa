FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SyedTahseen/Nexa /root/Nexa
WORKDIR /root/Nexa/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
