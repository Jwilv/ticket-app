import { useContext, useEffect } from 'react'
import { UiContext } from '../src/context/UiContext'

export const useHideMenu = (ocultar) => {

    const { showMenu, hidenMenu } = useContext(UiContext);

useEffect(() => {

if(ocultar){
hidenMenu()
}else{
showMenu()
}

}, [ocultar,showMenu,hidenMenu])


}
