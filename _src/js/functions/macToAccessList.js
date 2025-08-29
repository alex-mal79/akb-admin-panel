//================================================================
// Создание файла конфигурациии .rsc MikroTik для добавления / удаления
// MAC-адресов access-list
//================================================================
export const macToAccessList = () => {
    const getMacBtn = document.querySelector('[data-get-mac-btn]');
    if(getMacBtn){
        const inputGetMac = document.querySelector('[data-get-mac]');
        console.log('test');
        getMacBtn.addEventListener("click", () => {
            console.log(inputGetMac.value);
        });
    }
}