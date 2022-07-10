import httpGet from '../get.js';
import './card.css';

let response = ""
function get_players(){
    response = httpGet('https://d9uktx2rncbs004-testbasketdb.adb.us-ashburn-1.oraclecloudapps.com/ords/bca_dev/sportco_ga_boys_basketball_2022_available_vw/');
    response = JSON.parse(response);
    response = response['items'].slice(0, 26);
    console.log(response);

}



export default function Card() {
  return (
<div onLoad={get_players()}>
    <section class="container mx-auto xl:max-w-7xl px-6 py-24" x-data="card()" x-init="getData()">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
          {response.map((user) => (
                <div key= {user.twitter_username} className="relative w-full flex flex-col bg-white shadow-lg">
                    <div class="aspect-square">
                        <img src={user.icon_html} alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="absolute top-0 right-0 bg-indigo-600 py-2 px-4">
                        <p class="text-white font-semibold text-sm">Rank {user.player_rank}<span x-text="item.player_rank"></span></p>
                    </div>
                    <div class="p-3">
                        <h5 class="text-lg text-black font-medium leading-5" x-text="item.twitter_name"></h5>
                        <p class="text-gray-500 text-base mb-2">@{user.twitter_username}<span x-text="item.twitter_username"></span></p>
                        <p class="text-black text-sm font-bold" x-text="item.twitter_description">{user.twitter_description}<span /></p>
                    </div>

                    <div class="bg-black grid grid-cols-4 text-center px-1 py-2 mt-auto">
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.d1_count">{user.d1_count}</p>
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.d2_count">{user.d2_count}</p>
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.d3_count">{user.d3_count}</p>
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.cccaa_count">{user.ccaa_count}</p>
                    </div>
                    <div class="bg-white grid grid-cols-4 text-center px-1 py-2">
                        <p class="text-base text-black leading-4">D1</p>
                        <p class="text-base text-black leading-4">D2</p>
                        <p class="text-base text-black leading-4">D3</p>
                        <p class="text-base text-black leading-4">NAIA</p>
                    </div>
                    <div class="bg-black grid grid-cols-4 text-center px-1 py-2">
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.naia_count">{user.naia_count}</p>
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.graduation_year">{user.graduation_year}</p>
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.njcaa_count">{user.njcaa_count}</p>
                        <p class="text-base text-white leading-4 font-semibold" x-text="item.player_rank">{user.player_rank}</p>
                    </div>
                    <div class="bg-white grid grid-cols-4 text-center px-1 py-2">
                        <p class="text-base text-black leading-4">JC/CC</p>
                        <p class="text-base text-black leading-4"></p>
                        <p class="text-base text-black leading-4">HA</p>
                        <p class="text-base text-black leading-4">EI</p>
                    </div>
                </div>
          ))}
        </div>
    </section>
</div>

  )
}