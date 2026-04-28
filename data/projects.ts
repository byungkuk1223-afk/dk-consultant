export type Region =
  | "Asia"
  | "Middle East·Africa"
  | "Europe"
  | "Oceania"
  | "Latin America"
  | "Northern America"
  | "Etc.";

export interface ProjectDetail {
  capacity?: string;
  sector?: string;
  country?: string;
  client?: string;
  time?: string;
  hasImage?: boolean;
  imgExt?: string;
  imgUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  region: Region;
  detail?: ProjectDetail;
}

// ──────────────────────────────────────────────────────────────
// 프로젝트 데이터
// 새 프로젝트 추가 시 이 배열 맨 앞에 항목을 추가하세요.
// id는 현재 최댓값(63)보다 1 큰 숫자를 사용하세요.
// ──────────────────────────────────────────────────────────────
export const projects: Project[] = [
  // ── Page 1 (63 ~ 49) ──────────────────────────────────────
  {
    id: 63,
    title: "Blue Ammonia Project in Canada",
    category: "Feasibility Study",
    region: "Northern America",
    detail: {"capacity":"1000000t/year","sector":"Renewables","country":"Canada","client":"KIND","time":"25.05.23~","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1794350696_pFLMX7Jv_93b8c3350ac4cfd9def1ad57513f408c2c281bec.jpg"},
  },
  {
    id: 62,
    title: "SAF Development Project in Indonesia",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"200000t/year","sector":"Renewables","country":"Indonesia","client":"KEXIM","time":"25.03.28~","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1794350696_o6OeAQlF_9394ed58204530a97a6c3b2fe492684d33c3b2de.jpg"},
  },
  {
    id: 61,
    title: "Pharmaceutical Manufacturing Facility in Kyrgyzstan",
    category: "Business Development",
    region: "Asia",
    detail: {"sector":"Healthcare","country":"Kyrgyzstan","client":"Private","time":"25.02.28~","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1794350696_z7K0tiLO_3223f32c98ac8b73d1edeb8778f6b0c2c2422c45.jpg"},
  },
  {
    id: 60,
    title: "Pharmaceutical Manufacturing Facility in Uzbekistan",
    category: "Business Development (BOO)",
    region: "Asia",
    detail: {"sector":"Healthcare","country":"Uzbekistan","client":"KIND","time":"25.02.05~","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1794350696_6OLAmdzJ_7eb5a2bd37f73f6596800e22449cafaf8a35624e.jpg"},
  },
  {
    id: 59,
    title: "Green Hydrogen Development Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"3000000t/year","sector":"Renewables","country":"Australia","client":"KEITI","time":"24.11.01~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1794350696_Eipyv5Fw_82c342ee21852b98681dcd6f368bd6f81727cee5.png"},
  },
  {
    id: 58,
    title: "Solar Power Generation and Carbon Credit Acquisition Project",
    category: "Feasibility Study",
    region: "Etc.",
    detail: {"capacity":"Renewable: 210MW / Carbon Credit","sector":"Renewables","country":"Argentina","client":"CAiT engineering","time":"24.11.01","hasImage":true,"imgExt":"jpg"},
  },
  {
    id: 57,
    title: "Green Hydrogen Ammonia Project in Dubai",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"Electrolysis: 600MW, Renewalbe: 1,200MW, Green Hydrogen: 37000/year, Grren Ammonia 200000t/year","sector":"Renewables","country":"UAE","client":"KEITI","time":"2024.06~","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1794350696_TsvjzP3h_6929fe381ab89b591124f79234480b94037e4383.jpg"},
  },
  {
    id: 56,
    title: "Green Hydrogen Ammonia Project in Western Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"Electrolysis: 1.1GW, Renewalbe: 1.9 GW, Green Ammonia 500000t/year","sector":"Renewables","country":"Australia","client":"KEXIM","time":"2024.05~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_NEtdF026_508f9779d03ed83fcf6d5b54638769942678e75e.png"},
  },
  {
    id: 55,
    title: "Tashkent Medical Waste-to-Energy Project in Uzbekistan",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"Power: 4.5 MWh,  Waste: 22,000 t/year","sector":"Infrastructure","country":"Uzbekistan","client":"KEITI","time":"2024.04~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_UXHkaAge_ca25a16b643b4387c9aa7aaa10f85ffc8a0f5d72.png"},
  },
  {
    id: 54,
    title: "Queensland Green Methanol Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"200MW","sector":"Renewables","country":"Australia","client":"KEITI","time":"2024.04~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_fw8lM57B_960c43b3af031d608c131562bd2df98e79beac00.png"},
  },
  {
    id: 53,
    title: "BC Green Ammonia Project in Canada",
    category: "Feasibility Study",
    region: "Northern America",
    detail: {"capacity":"Electrolysis: 255MW,  230MW, Green Hydrogen: 37,815TPA, Green Ammonia: 210,000 TPA","sector":"Renewables","country":"Canada","client":"KEXIM","time":"2023.12~2024.10","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_PqoVBwUt_c93fceca1a51affe65e7de2543af4b7dafe02603.png"},
  },
  {
    id: 52,
    title: "Newcastle Green Ammonia Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"Carbon Credit","sector":"Renewables","country":"Australia","client":"KIND","time":"2023.11~2024.04","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_9cLA8Nhx_f140ec52f64cc84cee36fd2853169d5fd39ba96a.png"},
  },
  {
    id: 51,
    title: "Uljin Nuclear Hydrogen Basic Plan in Korea",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Korea","client":"Uljin-gun","time":"2023.08~2024.08","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_NJWYSLpG_c4c0bccdfe932c51a92a90216c68ffb6fa875585.png"},
  },
  {
    id: 50,
    title: "Dumai Refinery Project in Indonesia",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Petro-Chemical","country":"Indoensia","client":"KEXIM","time":"2023.05~2024.05","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_uwOpfF6r_b4c3cef712cb28409b5f4c8ca2de0fd017e34f97.png"},
  },
  {
    id: 49,
    title: "BESS Construction Project in Ireland",
    category: "Feasibility Study",
    region: "Europe",
    detail: {"capacity":"63.2MW","sector":"Renewables","country":"Ireland","client":"KEITI","time":"2023.05~2024.03","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_KC0m3jxu_ac3fce67f21981b3a54abc9eb2d06761287a8039.png"},
  },

  // ── Page 2 (48 ~ 34) ──────────────────────────────────────
  {
    id: 48,
    title: "Hai Lang FS Report Review in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Power","country":"Vietnam","client":"KEPCO E&C","time":"2023.03~2023.07","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_4McKF0Cd_974f30adcdd1dd1eed7206cdafb128d403cb4254.png"},
  },
  {
    id: 47,
    title: "Financial Advisory Service in Korea",
    category: "Financial Advisory",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Korea","client":"KIND","time":"2023.03~2023.07"},
  },
  {
    id: 46,
    title: "BESS Implementation Project in Ireland",
    category: "Feasibility Study",
    region: "Europe",
    detail: {"capacity":"BESS: 63.2MWh, Synchronous Condenser: 4,000mws","sector":"Renewables","country":"Ireland","client":"KEITI","time":"2023.05~2023.11","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_dPYmjyKp_d2a0576ece1a1346f6b1f5bb1c4125be4b10ddaa.png"},
  },
  {
    id: 45,
    title: "Renewable Energy Complex Development Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"Electrolysis: 667MW, Renewable: 900MW, Green Hydrogen: 28000t/year, Green Ammonia: 150000t/year","sector":"Renewables","country":"Australia","client":"KEITI","time":"2022.05~2022.12","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_K5QXTpkC_c1ab3548dee768ff64cbbe7639aa296e1ac84a70.png"},
  },
  {
    id: 44,
    title: "Customs Container Inspection Facility Project in Sri Lanka",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Sri Lanka","client":"KIND","time":"2022.04~2022.11","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_SyVzuOEx_4714d308b2a6263f6a8059a4e336657db31f88c5.png"},
  },
  {
    id: 43,
    title: "School PPP PKG III in Qatar",
    category: "Pre-feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"14 School","sector":"Education","country":"Qatar","client":"Samil PwC","time":"2021.10~2022","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_jJyEqtYh_73986d2f396bc9583c965eaaeeda656b9440df68.png"},
  },
  {
    id: 42,
    title: "Sulawesi 30MW Small Hydropower Project in Indonesia",
    category: "Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"30MW","sector":"Renewables","country":"Indonesia","client":"Dohwa Engineering","time":"2021.12~2022.04","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_iaYAho4s_d904994753a42489cef021af554c989f899261b5.png"},
  },
  {
    id: 41,
    title: "Alfonso el Sabio Solar PV in Spain",
    category: "Feasibility Study",
    region: "Europe",
    detail: {"capacity":"600MW","sector":"Renewables","country":"Spain","client":"KEITI","time":"2022.01~2022.08","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_TvzAuCLI_a0fd846961e8b268982677df36fc471385d5b785.png"},
  },
  {
    id: 40,
    title: "Battambang II Hydro Power Project in Cambodia",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"30MW","sector":"Renewables","country":"Cambodia","client":"KIND","time":"2022.08~2023.01","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_cBq3idUF_c8162e74de2bc14a59d51406a5e6f24c1529eb1d_1200x789.jpg"},
  },
  {
    id: 39,
    title: "Duqm Green Ammonia Project in Oman",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"1200 kton/yr (3.4 kton/day)","sector":"Renewables","country":"Oman","client":"KEITI","time":"2021.11~2022.08","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_IlMYe7KT_ff290bc1067d0d95d6f4e76e261ddf224a868725_1200x626.jpg"},
  },
  {
    id: 38,
    title: "Western Australia Green Ammonia Project in Australia",
    category: "Feasibility Study",
    region: "Oceania",
    detail: {"capacity":"1200 kton/yr (3.4 kton/day)","sector":"Renewables","country":"Australia","client":"KEITI","time":"2022.07~2022.12","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_D7crajh6_d44acbc730dd88f04cd4edc7a1de65109a13cc3a_1200x800.jpg"},
  },
  {
    id: 37,
    title: "Phou Ngoy Mekong Hydro Power Plant in Laos",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"728MW","sector":"Renewables","country":"Laos","client":"Dohwa Engineering / KEITI","time":"2021~2022","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_XMrP6vyC_64f6a25eccfcca4abdf74a90e26e5579eb9348e7_1200x800.jpg"},
  },
  {
    id: 36,
    title: "School PPP PKG III in Qatar (Synergy Korea)",
    category: "Pre-feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"14 Schools","sector":"Education","country":"Qatar","client":"Samil PwC","time":"2021.10~2022","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_cRul7v0d_df8b37ea73df1feb37df4d5ee17b8c437a87874e_1200x800.jpg"},
  },
  {
    id: 35,
    title: "Texas Supercritical CO2 Power Plant in USA",
    category: "Transaction Advisory Services",
    region: "Northern America",
    detail: {"capacity":"± 5MW","sector":"sCO2 Power","country":"USA","client":"Hanwha Power Systems","time":"2021.10~2022.02","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_ia1wQfv4_4a97491d895ec4dc055af71e56e1a283464c78a0.png"},
  },
  {
    id: 34,
    title: "Gas To Power Project in Dominican Republic",
    category: "Feasibility Study",
    region: "Latin America",
    detail: {"capacity":"350MW~400MW","sector":"Power","country":"Dominican Republic","client":"KOGAS","time":"2021.10~2022.01","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_GjJrndPV_f624a5b60fe7bc6312c4b87c8d658ad4e4ff691f.png"},
  },

  // ── Page 3 (33 ~ 19) ──────────────────────────────────────
  {
    id: 33,
    title: "Gas To Power Project in Dominican Republic (Synergy Korea)",
    category: "Financial and Bid Advisory Service",
    region: "Latin America",
    detail: {"capacity":"350MW~400MW","sector":"Power","country":"Dominican Republic","client":"KOGAS","time":"2021.10~2022.01","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_U3MhdLGi_fb3ab2e3b2ddf715dde7ac7217c39720b322c858.png"},
  },
  {
    id: 32,
    title: "Tashkent Landfill Gas to Energy and CDM Project in Uzbekistan",
    category: "Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"16MW landfill gas power + 720 kton/yr CDM","sector":"Renewables","country":"Uzbekistan","client":"Sejin G&E","time":"2021.08~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_mywUERfV_a35c1725d1f3ba2f421765ccd174df6f5b15dbaa.png"},
  },
  {
    id: 31,
    title: "Anuradhapura Solar PV in Sri Lanka",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"100MW","sector":"Renewables","country":"Sri Lanka","client":"KIND","time":"2021.07~2021.12","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_fZHlt123_67a5084e9eaba1557fb368e23f10ae000d1c6406.png"},
  },
  {
    id: 30,
    title: "Mubarek CHP Modernization in Uzbekistan (Synergy Korea)",
    category: "Financial and Transaction Advisory Services",
    region: "Asia",
    detail: {"capacity":"400MW","sector":"Heat and Power","country":"Uzbekistan","client":"SK ecoplant","time":"2021.06~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_IhLaZ47x_62746eeff67ab0bb432474dbe1fc44d676f653b4.png"},
  },
  {
    id: 29,
    title: "BESS Project in Ireland (Synergy Korea) – Financial Advisory",
    category: "Financial Advisory Services",
    region: "Europe",
    detail: {"capacity":"200MW","sector":"Battery Energy Storage","country":"Ireland","client":"Hanhwa Energy","time":"2020.01~2020.11","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_WEsBHr5k_51004671c4686e420b09b4c9f0db85fe55be1d02.png"},
  },
  {
    id: 28,
    title: "BESS Project in Ireland (Synergy Korea) – Operations Modeling",
    category: "Commercial Operations Modeling",
    region: "Europe",
    detail: {"capacity":"200MW","sector":"Battery Energy Storage","country":"Ireland","client":"Hanhwa Energy","time":"2021.06~2021.09","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_L4cMglZU_7117847f77e59ad50b7b6ac7a0d4d5e1a7e636b6.png"},
  },
  {
    id: 27,
    title: "Nickel and Cobalt Smelter for PT BES in Indonesia",
    category: "Bankable Feasibility Study, Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"30,000 ton Ni/yr in NiSO4 product","sector":"Smelter","country":"Indonesia","client":"PT Angkasa Jaya Mulia","time":"2021.05~","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_jVRcW5r9_4cbc5dca3ae2d037da8f84391edbe6fa9a0c84e1.png"},
  },
  {
    id: 26,
    title: "CCGT in Limbe in Cameroon",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"350MW","sector":"Power","country":"Cameroon","client":"KIND","time":"2021.04~2021.10","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_p9FeUq1Y_2f0c96f44298cd41831e9b9a7d0449e46182001d.png"},
  },
  {
    id: 25,
    title: "Long An Gas to Power in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"3,000MW (Long An I and II)","sector":"Power","country":"Vietnam","client":"KEXIM","time":"2021.02~2021.11","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_LrqFTfzn_eee1a76f2410861ef1fa1734bf9ca0a062876a12.png"},
  },
  {
    id: 24,
    title: "BOT-based Gas Supply Project in Indonesia",
    category: "Feasibility Study and Financial Advisory Services",
    region: "Asia",
    detail: {"sector":"Gas","country":"Indonesia","client":"Hwangso Engineering","time":"2021","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_VNc4yX8I_c3d93e7abcee5ced2dd35bd45bd2ea4b2dca7b6e.png"},
  },
  {
    id: 23,
    title: "Hai Lang LNG to Power in Vietnam",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"Phase 1: 1,500MW, Phase 2: 3,000MW","sector":"Power","country":"Vietnam","client":"KEXIM","time":"2020.21~2021.12","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_IMFca9vh_57deca9b8361e7ed08cbf2f46ff6bcaf335e526a.png"},
  },
  {
    id: 22,
    title: "District Cooling Project for South Saad Al Abdullah Smart City",
    category: "Feasibility Study",
    region: "Middle East·Africa",
    detail: {"capacity":"~228,500 RT (Total 6 plants)","sector":"Smart City","country":"Kuwait","client":"KEXIM","time":"2020~2021"},
  },
  {
    id: 21,
    title: "Development of Jurassic Production Facility 4&5 at North Kuwait",
    category: "Financial Advisory Services",
    region: "Middle East·Africa",
    detail: {"capacity":"50,000 bpd and 150 MMscfd","sector":"Oil and Gas","country":"Kuwait","client":"Samsung Engineering","time":"2020.12~2021.03","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_WwixJ3sG_68f5c2e741c34d7a5ce3140c0c0fc0fc7fc8907d.png"},
  },
  {
    id: 20,
    title: "Hydro Power Development in Upper Karnali River in Nepal",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"capacity":"900MW","sector":"Renewables","country":"Nepal","client":"KEITI","time":"2020.11~2021.08","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_4pPsVF6c_ba48cfb371ca1af22564ebe9b98b11bf1bdc3368.png"},
  },
  {
    id: 19,
    title: "Development of Wanasari Port in Indonesia",
    category: "Establishment of Basic Plan and Feasibility Study",
    region: "Asia",
    detail: {"sector":"Port","country":"Indonesia","client":"Daeyoung Engineering, Samil PwC","time":"2020~2021","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_xOzJwe3B_2d8684c61e0aad948f0c1e321d80d153f021e239.png"},
  },

  // ── Page 4 (18 ~ 4) ───────────────────────────────────────
  {
    id: 18,
    title: "Rajasthan Bio-Medical Cluster PPP in India",
    category: "Advisory Services, Research and Analysis for Business Development",
    region: "Asia",
    detail: {"sector":"Healthcare","country":"India","client":"SCL Healthcare","time":"2020","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_URJPnFoH_53122c255a1ec4c4017a0a1b6ab1143d49ec89e6.png"},
  },
  {
    id: 17,
    title: "Bali Ngurah Rai Int'l Airport City-Air Terminal and LRT Development",
    category: "Financial Analysis",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Indonesia","client":"KRTC (Korean Railroad Technical Corporation)","time":"2020","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_y8ViUbQK_2b1689d65dd481b170292c496feb910f7184123d.png"},
  },
  {
    id: 16,
    title: "IWP in UAE",
    category: "Bid Strategy and Simulation",
    region: "Middle East·Africa",
    detail: {"capacity":"200 MIFD","sector":"Water","country":"UAE","client":"Samsung Engineering","time":"2019","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/1926205786_tgkECuUO_702572f7a05717cae750f512fcd191c9fc9bd1d0.png"},
  },
  {
    id: 15,
    title: "Annual Financial Advisory",
    category: "Financial Advisory",
    region: "Etc.",
    detail: {"sector":"Power","client":"KEPCO E&C","time":"2020.06~2021.06","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_1V4kmNWo_eceeff3c196feb94302eebea65e55752dd523382_1200x800.jpg"},
  },
  {
    id: 14,
    title: "Philippines Batangas Gas-to-Power",
    category: "Feasibility Study",
    region: "Asia",
    detail: {"sector":"Power","country":"Philippines","client":"KIND","time":"2020.04.16~2020.09.12","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_OGnSkKLF_8f9d5f45200536233155c04bd1bd7d63e2255c9e.jpg"},
  },
  {
    id: 13,
    title: "Philippines Ministry of Defense Solar Power",
    category: "Philippine Power Market Review, Financial Advisory Services",
    region: "Asia",
    detail: {"sector":"Power","country":"Philippines","client":"KEPCO E&C","time":"2020.01~2020.11","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_ymBF1Ddo_df0e84704a4f1f1b0b5e8782568e100c3bb89972_1200x800.jpg"},
  },
  {
    id: 12,
    title: "Karbala Solar PV Farm in Iraq",
    category: "Financial Feasibility and Bankability Studies",
    region: "Middle East·Africa",
    detail: {"capacity":"300 MW","sector":"Power","country":"Iraq","client":"KIND","time":"2019.08~2019.12","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_uhlyHbif_50c084e483d72863636f265ae85ffefa58c28630.jpg"},
  },
  {
    id: 11,
    title: "Bidding Strategy for Hospital PPP Project",
    category: "Bidding Strategy including Bankable Project Structuring",
    region: "Etc.",
    detail: {"sector":"Infrastructure","country":"Kyrgyzstan, Kazakhstan","client":"KHIDI","time":"2019.08.30~2019.11.29"},
  },
  {
    id: 10,
    title: "Modernization of District Heating Systems in Uzbekistan",
    category: "Feasibility Study, Financial Advisory",
    region: "Asia",
    detail: {"sector":"DHP","country":"Uzbekistan","client":"KEXIM","time":"2022.03~2022.11","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-1926205786_cBq3idUF_c8162e74de2bc14a59d51406a5e6f24c1529eb1d_1200x789.jpg"},
  },
  {
    id: 9,
    title: "Mymensingh Solar Park in Bangladesh",
    category: "M&A Valuation and Due Diligence Support",
    region: "Asia",
    detail: {"capacity":"50 MW","sector":"Power","country":"Bangladesh","client":"KEPCO E&C","time":"2019.06~2019.07","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_47JwFYD9_6fbfc3794c2a714b088bf5e944403ff7376e0563.jpg"},
  },
  {
    id: 8,
    title: "Dhaka West IPP Diesel Power Plant in Bangladesh",
    category: "Financial Advisory Services",
    region: "Asia",
    detail: {"capacity":"108 MW","sector":"Power","country":"Bangladesh","client":"Sae-A STX Entech","time":"2019.06~2019.10","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_1oKDXmwR_150298d117b372899309ade204f08f771c4471f7.png"},
  },
  {
    id: 7,
    title: "Kyrgyzstan State Medical Academy Hospital Project in Bishkek",
    category: "Hospital Planning and Financing Structure",
    region: "Asia",
    detail: {"capacity":"500 Beds","sector":"Healthcare","country":"Kyrgyzstan","client":"KIND","time":"2019.04~2019.08","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-3739808348_U5kBdjJF_9102ce6a01746ffbb7bea3c80e0e89c9ebe11ba0_1200x601.png"},
  },
  {
    id: 6,
    title: "Tarija National Cardiac Center in Bolivia",
    category: "Social/Economic Cost Benefit Analysis",
    region: "Latin America",
    detail: {"capacity":"400 Beds","sector":"Healthcare","country":"Bolivia","client":"EDCF","time":"2019.04~2019.08","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/thumb-3739808348_deluLiJq_16bda22ef10b5a42d47fc28c48ca2d0f931b80a4_1200x675.jpg"},
  },
  {
    id: 5,
    title: "Strategy for Construction-based Healthcare Package in Overseas",
    category: "Overseas Healthcare Business Strategy",
    region: "Etc.",
    detail: {"sector":"Healthcare","country":"Indonesia, Kyrgyzstan, Kazakhstan, Uzbekistan","client":"KHIDI","time":"2018.09~2018.11","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_ixqozLGF_15cfa50a62aef4162ac8528b89e95b5cca8d57c5.png"},
  },
  {
    id: 4,
    title: "KSP for Public Infrastructure in Thailand",
    category: "Prioritization Guideline for Public Infrastructure Projects",
    region: "Asia",
    detail: {"sector":"Infrastructure","country":"Thailand","client":"KEXIM","time":"2018.09~2018.11","hasImage":true,"imgExt":"jpg","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_G7CYRF2u_2e9d636366c980e68c5bbc649912b6dcd28e3571.jpg"},
  },

  // ── Page 5 (3 ~ 1) ────────────────────────────────────────
  {
    id: 3,
    title: "Dharmais National Cancer Center in Indonesia",
    category: "Feasibility Study including Hospital Planning and Payment Structure",
    region: "Asia",
    detail: {"capacity":"194 Beds","sector":"Healthcare","country":"Indonesia","client":"MOLIT","time":"2018.07~2018.11","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_bIiy1onw_7037dfc6b5dbf4c02294ebdaf55ad431695e6dab.png"},
  },
  {
    id: 2,
    title: "Iran Saveh and Zahedan CCGT",
    category: "Bankability Study & Non Traditional Financing Advisory",
    region: "Middle East·Africa",
    detail: {"capacity":"1200 MW (Saveh) / 880 MW (Zahedan)","sector":"Power","country":"Iran","client":"MOLIT","time":"2017.09~2018.01","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_pvfLsAxU_3869f2289a2f35a1cdf66eab30368e42f75ea28d.png"},
  },
  {
    id: 1,
    title: "PCPC Aramco Cogeneration Projects",
    category: "Arbitration Advisory Services",
    region: "Middle East·Africa",
    detail: {"capacity":"876 MW","sector":"Power","country":"Saudi Arabia","client":"Samsung Engineering","time":"2017.07","hasImage":true,"imgExt":"png","imgUrl":"https://dk-consultant.com/data/file/04_01_new/3739808348_3VIK7P8z_b659ca685b4b43503fdce9075ba00c80701fff7e.png"},
  },
];
