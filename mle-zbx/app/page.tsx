import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-slate-100">
      <div className="flex flex-col w-[24rem] bg-white py-40 px-10">
        <span className="py-1 px-2 bg-red-600 text-center text-white w-max mx-auto mb-5">ZABBIX</span>
        <input className="outline-none border border-slate-400 focus:border-slate-500 p-2 mt-2 text-md" type="text" name="username" id="username" placeholder="Enter Username"/>
        <input className="outline-none border border-slate-400 focus:border-slate-500 p-2 mt-2 text-md" type="password" name="username" id="username" placeholder="Enter Password"/>
        <button className="p-3 bg-blue-600 text-white text-sm mt-2" type="submit">Sign in</button>
      </div>
    </main>
  );
}
