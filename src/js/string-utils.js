let randomString = function(length) {
    // 生成する文字列に含める文字セット
    let c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let cl = c.length;
    let r = "";
    for(let i=0; i<length; i++){
        r += c[Math.floor(Math.random()*cl)];
    }

    return r;
};