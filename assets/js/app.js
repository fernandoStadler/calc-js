const  addEventListenerToButton=(button, btnValue)=> {
    button.addEventListener('click', () => {
      txt_input.value += btnValue
    })
  }
  
  btn_equals.addEventListener('click', () => {
    try {
      let resultado = eval(txt_input.value)
      txt_input.value = resultado
    } catch (error) {
      alert('Operação invalida')
    }
  })
  btn_clear.addEventListener('click', ()=>{
    txt_input.value = ''
  })

  addEventListenerToButton(btn_1, '1')
  addEventListenerToButton(btn_2, '2')
  addEventListenerToButton(btn_3, '3')
  addEventListenerToButton(btn_4, '4')
  addEventListenerToButton(btn_5, '5')
  addEventListenerToButton(btn_6, '6')
  addEventListenerToButton(btn_7, '7')
  addEventListenerToButton(btn_8, '8')
  addEventListenerToButton(btn_9, '9')
  addEventListenerToButton(btn_0, '0')
  addEventListenerToButton(btn_sub, '-')
  addEventListenerToButton(btn_plus, '+')
  addEventListenerToButton(btn_mult, '*')
  addEventListenerToButton(btn_div, '/')
  addEventListenerToButton(btn_dot, '.')
  
  