import React from 'react';


class Asiamol extends React.Component{
    render(){
        return (
                <div className="wrapper">          
                    {/* <Router  path='/posts'  Component={Posts}/>
                    <Router path='/onepost'  Component={Post}/> */}
                    <p>Разработчик может определить какое свойство и как анимировать. Это позволяет создавать сложные переходы. Так как некоторые свойства не имеет смысла анимировать, перечень доступных для анимирования свойств ограничен определённым набором.

                    Замечание: Перечень анимируемых свойств может меняться по мере изменения спецификации.
                    Значение свойства auto является сложным случаем. Спецификация не рекомендует анимировать в значение auto и из значения auto. Браузеры, основанные на Gecko, исполняют это требование в точности, а основанные на WebKit не так строго. Использование переходов с auto следует избегать, так как это может привести к непредсказуемым результатам, в зависимости от браузера и его версии.

                    Необходимо также соблюдать осторожность при использовании переходов сразу после добавления элемента в DOM с помощью .appendChild() или удаления его display: none; свойства. Это выглядит, как будто никогда не происходило начальное состояние, а элемент всегда был в конечном состоянии. Самый простой способ преодолеть это ограничение - применить window.setTimeout() c некоторым количеством миллисекунд до изменения CSS свойства, которое вы собираетесь анимировать.

                    Пример анимирования нескольких свойств
                    HTML</p>
                </div>
        );
    }
}



export default Asiamol;
