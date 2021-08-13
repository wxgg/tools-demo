import React, {useState, useRef, useMemo, useContext,useImperativeHandle, forwardRef, useReducer} from 'react';
const MyContext = React.createContext();


const Son = () => {
  const res = useContext(MyContext)
  return (
      <>
          <div>
              <h1>{res.code}</h1>
              <hr/>
              <h2>{res.title}</h2>
          </div>
      </>
  )
}

const Son2 = forwardRef( (props,ref) => {
  const inputRef = useRef(0)
  const domRef = useRef()
  const [state, setState] = useState('等待')
  useImperativeHandle(ref,()=>({
      focus:() => {inputRef.current.focus(); console.log(21)},
      domRef
  }))
  return (
      <div>
          <h1>{state}</h1>
          <hr/>
          <input type="text" ref={inputRef}/>
          <h2  ref={domRef}>测试---------useImperativeHandle</h2>
      </div>
  )
})
const Memo = () => {
  const  [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const newValue = useMemo(()=>{
      console.log(`count 值为${count}`)
      console.log(`num 值为 ${num}`)
      return count+num
  },[count])
  return(
      <div>
          <h1>{count}</h1> 
          <button onClick={()=>{setCount(count+1)}}>count + 1</button>
          <hr/>
          <h1>{num}</h1> 
          <button onClick={()=>{setNum(num+1)}}>Num + 1</button>
          <hr/>
          <h2>{newValue}</h2>
      </div>
  )
}
const connect = (Warp, initState) => {
  return (props) => {
    const [state, dispatch] = useReducer((state,action)=> {
      switch (action.type){
          case 'addNum':
              return {
                  num:state.num+1
              }
          case 'subtractNum':
              return {
                  num:state.num-1
              }
      }
          
    }, initState);
  
    return <Warp {...props}action={dispatch} state={state}/>
  }

}

export default connect((props) => {
  const { state, action } = props;
  const [result, setResulte] = useState({
    code:200,
    title:'添加数据成功'
  })
  const inputRef = useRef({value:123})
  const refFather = useRef(0);

  // const [state, dispatch] = useReducer((state,action)=> {
  //   switch (action.type){
  //       case 'addNum':
  //           return {
  //               num:state.num+1
  //           }
  //       case 'subtractNum':
  //           return {
  //               num:state.num-1
  //           }
  //   }
        
  // },{
  //   num:0
  // })
  return (
    <MyContext.Provider value={result}>
          <h1>测试</h1>
          <input type="text" ref={inputRef} />
          <button onClick={()=>{console.log(inputRef.current.value)}}>获取input 值</button>
          <button onClick={()=>{inputRef.current.focus()}}>获取input 焦点</button>
          <button onClick={()=>{setResulte({code:2022,title:'添加数据成功'})}}>修改</button>
          <Son/>
          <Memo />


          <Son2 ref={refFather} />
          <button onClick={()=>{refFather.current.focus()}}>获取子组件实例------获取input焦点</button>
          <button onClick={()=>{console.log(refFather.current.domRef.current.innerHTML)}}>获取子组件实例------获取h2 Dom</button>
          <h2>{state.num}</h2>
            <button onClick={()=>{action({type:'addNum'})}}> 增加num</button>
            <button onClick={()=>{action({type:'subtractNum'})}}> 减少num</button>

      </MyContext.Provider>
  )
},{
    num:0
  })