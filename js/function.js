function isValidUrl(string) {
    try{
        new URL(string);
        return true;
    }catch (err) {
        return false;
    }
}

function validate(data) {
    if(!data.name.value){
        alert("Nomini kiritish shart!")
    data.name.focus();
    return false;
    }

    if(data.name.value.trim().length < 3){
        alert("Nomini kamida 4ta belgidan iborat bo'lishi kerak!")
    data.name.focus();
    return false;
    }

    if(!data.price.value){
        alert("Narxini kiritish shart!")
    data.price.focus();
    return false;
    } 

    if(data.price.value < 100){
        alert("Narxi kam kiritildi!")
    data.price.focus();
    return false;
    } 

    if (!Number(data.price.value)) {
        alert("Narxini raqamda kiritish shart!")
    data.price.focus();
    return false;
    } 

    if(!data.color.value){
        alert("Rangini tanlash shart!")
    data.color.focus();
    return false;
    }

    if(!data.img.value){
        alert("Rasmni kiritish shart!")
    data.img.focus();
    return false;
    }

    if(!isValidUrl(data.img.value)){
        alert("Rasm notogri kiritildi!")
    data.img.focus();
    return false;
    }

    if(!data.type.value){
        alert("Turini kiritish shart!")
    data.type.focus();
    return false;
    } 

    return true;
}

export{validate}