interface InputProps {
  label: string;
  id: string;
  size: "lg" | "md";
  height: number;
}

export default function (props: InputProps) {
  const inputClass = `peer h-${props.height} w-11/12 rounded-[7px] border border-blue-gray-200 text-slate-50
    bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline 
    outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
    placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:outline-0 
    disabled:border-0 disabled:bg-blue-gray-50`;

  const labelClass = `pointer-events-none absolute bottom-1 pt-0 left-3 mb-0 max-w-[90%] before:box-border mt-0
    origin-[0_0] truncate leading-[2.15] text-slate-50 bg-transparent transition-all duration-200 
    ease-out peer-focus:-translate-y-[-1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary 
    peer-data-[te-input-state-active]:-translate-y-[-1.15rem] peer-data-[te-input-state-active]:scale-[0.8] 
    motion-reduce:transition-none dark:peer-focus:text-primary peer-focus:bg-slate-500 opacity-100`;
  return (
    <div className={`relative mb-1 mt-3`}>
      {props.size === "lg" ? (
        <textarea className={inputClass} placeholder=" " />
      ) : (
        <input className={inputClass} placeholder=" " />
      )}

      <label htmlFor={props.id + "ControlInput"} className={labelClass}>
        {props.label}
      </label>
    </div>
  );
}

// export default function (props: InputProps) {
//   const inputClass = `block w-11/12 rounded-[7px] border border-blue-gray-200 text-slate-50
//     bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline
//     outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
//     placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:outline-0
//     disabled:border-0 disabled-bg-blue-gray-50`;

//   const labelClass = `pointer-events-none absolute bottom-1 pt-0 left-3 mb-0 max-w-[90%] before:box-border mt-0
//   origin-[0_0] truncate leading-[2.15] text-slate-50 transition-all duration-200
//   ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary
//   peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8]
//   motion-reduce:transition-none dark:peer-focus:text-primary bg-slate-500 opacity-100`;
//   if (props.size === "lg") {
//     return (
//       <div>
//         <label htmlFor={props.id + "ControlInput"} className="text-slate-50">
//           {props.label}
//         </label>
//         <textarea
//           id={props.id}
//           className={`${inputClass} h-${props.height}`}
//           placeholder={props.label}
//         ></textarea>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <label htmlFor={props.id + "ControlInput"} className="text-slate-50">
//           {props.label}
//         </label>
//         <input
//           type="text"
//           id={props.id}
//           className={labelClass}
//           placeholder={props.label}
//         />
//       </div>
//     );
//   }
// }
