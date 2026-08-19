import {createContext,useCallback,useContext,useEffect,useState} from 'react';
const ToastContext=createContext(()=>{});
export function ToastProvider({children}){const [items,setItems]=useState([]);const toast=useCallback((message,type='success')=>{const id=Date.now();setItems(v=>[...v,{id,message,type}]);setTimeout(()=>setItems(v=>v.filter(x=>x.id!==id)),3600)},[]);return <ToastContext.Provider value={toast}>{children}<div className="toast-stack" aria-live="polite">{items.map(x=><div key={x.id} className={`toast ${x.type}`}><span>{x.type==='success'?'✓':'!'}</span>{x.message}<button onClick={()=>setItems(v=>v.filter(i=>i.id!==x.id))}>×</button></div>)}</div></ToastContext.Provider>}
export const useToast=()=>useContext(ToastContext);
