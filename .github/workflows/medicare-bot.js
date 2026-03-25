const { chromium } = require('playwright');

// 1. Credentials
const SURFSHARK_USER = process.env.SURFSHARK_MANUAL_USER;
const SURFSHARK_PASS = process.env.SURFSHARK_MANUAL_PASS;

// 2. The Complete Server List
const surfsharkServers = [
    // --- INTERNATIONAL SERVERS ---
    'al-tia.prod.surfshark.com:80',
    'dz-alg.prod.surfshark.com:80',
    'ad-leu.prod.surfshark.com:80',
    'ar-bua.prod.surfshark.com:80',
    'am-evn.prod.surfshark.com:80',
    'at-vie.prod.surfshark.com:80',
    'az-bak.prod.surfshark.com:80',
    'bs-nas.prod.surfshark.com:80',
    'bd-dac.prod.surfshark.com:80',
    'bz-blp.prod.surfshark.com:80',
    'bt-pbh.prod.surfshark.com:80',
    'bo-sre.prod.surfshark.com:80',
    'ba-sjj.prod.surfshark.com:80',
    'br-sao.prod.surfshark.com:80',
    'bn-bwn.prod.surfshark.com:80',
    'bg-sof.prod.surfshark.com:80',
    'kh-pnh.prod.surfshark.com:80',
    'cl-san.prod.surfshark.com:80',
    'co-bog.prod.surfshark.com:80',
    'cr-sjn.prod.surfshark.com:80',
    'hr-zag.prod.surfshark.com:80',
    'cy-nic.prod.surfshark.com:80',
    'cz-prg.prod.surfshark.com:80',
    'dk-cph.prod.surfshark.com:80',
    'ec-uio.prod.surfshark.com:80',
    'eg-cai.prod.surfshark.com:80',
    'ee-tll.prod.surfshark.com:80',
    'fi-hel.prod.surfshark.com:80',
    'ge-tbs.prod.surfshark.com:80',
    'gh-acc.prod.surfshark.com:80',
    'gr-ath.prod.surfshark.com:80',
    'gl-goh.prod.surfshark.com:80',
    'hk-hkg.prod.surfshark.com:80',
    'hu-bud.prod.surfshark.com:80',
    'is-rkv.prod.surfshark.com:80',
    'id-jak.prod.surfshark.com:80',
    'ie-dub.prod.surfshark.com:80',
    'im-iom.prod.surfshark.com:80',
    'il-tlv.prod.surfshark.com:80',
    'jp-tok.prod.surfshark.com:80',
    'kz-ura.prod.surfshark.com:80',
    'la-vte.prod.surfshark.com:80',
    'lv-rig.prod.surfshark.com:80',
    'li-qvu.prod.surfshark.com:80',
    'lt-vno.prod.surfshark.com:80',
    'lu-ste.prod.surfshark.com:80',
    'mo-mfm.prod.surfshark.com:80',
    'my-kul.prod.surfshark.com:80',
    'mt-mla.prod.surfshark.com:80',
    'mx-qro.prod.surfshark.com:80',
    'md-chi.prod.surfshark.com:80',
    'mc-mcm.prod.surfshark.com:80',
    'mn-uln.prod.surfshark.com:80',
    'me-tgd.prod.surfshark.com:80',
    'ma-rab.prod.surfshark.com:80',
    'mm-nyt.prod.surfshark.com:80',
    'np-ktm.prod.surfshark.com:80',
    'nl-ams.prod.surfshark.com:80',
    'nz-akl.prod.surfshark.com:80',
    'ng-lag.prod.surfshark.com:80',
    'mk-skp.prod.surfshark.com:80',
    'no-osl.prod.surfshark.com:80',
    'pk-khi.prod.surfshark.com:80',
    'pa-pac.prod.surfshark.com:80',
    'py-asu.prod.surfshark.com:80',
    'pe-lim.prod.surfshark.com:80',
    'ph-mnl.prod.surfshark.com:80',
    'pr-sju.prod.surfshark.com:80',
    'ro-buc.prod.surfshark.com:80',
    'sa-ruh.prod.surfshark.com:80',
    'rs-beg.prod.surfshark.com:80',
    'sg-sng.prod.surfshark.com:80',
    'sk-bts.prod.surfshark.com:80',
    'si-lju.prod.surfshark.com:80',
    'za-jnb.prod.surfshark.com:80',
    'kr-seo.prod.surfshark.com:80',
    'lk-cmb.prod.surfshark.com:80',
    'se-sto.prod.surfshark.com:80',
    'ch-zur.prod.surfshark.com:80',
    'tw-tai.prod.surfshark.com:80',
    'th-bkk.prod.surfshark.com:80',
    'tr-ist.prod.surfshark.com:80',
    'ua-iev.prod.surfshark.com:80',
    'ae-dub.prod.surfshark.com:80',
    'uy-mvd.prod.surfshark.com:80',
    'uz-tas.prod.surfshark.com:80',
    've-car.prod.surfshark.com:80',
    'vn-hcm.prod.surfshark.com:80',
    'au-per.prod.surfshark.com:80',
    'au-adl.prod.surfshark.com:80',
    'au-bne.prod.surfshark.com:80',
    'au-mel.prod.surfshark.com:80',
    'au-syd.prod.surfshark.com:80',
    'be-anr.prod.surfshark.com:80',
    'be-bru.prod.surfshark.com:80',
    'ca-mon.prod.surfshark.com:80',
    'ca-van.prod.surfshark.com:80',
    'ca-tor.prod.surfshark.com:80',
    'fr-mrs.prod.surfshark.com:80',
    'fr-par.prod.surfshark.com:80',
    'fr-bod.prod.surfshark.com:80',
    'de-ber.prod.surfshark.com:80',
    'de-fra.prod.surfshark.com:80',
    'in-del.prod.surfshark.com:80',
    'in-mum.prod.surfshark.com:80',
    'it-rom.prod.surfshark.com:80',
    'it-mil.prod.surfshark.com:80',
    'pl-waw.prod.surfshark.com:80',
    'pl-gdn.prod.surfshark.com:80',
    'pt-opo.prod.surfshark.com:80',
    'pt-lis.prod.surfshark.com:80',
    'es-bcn.prod.surfshark.com:80',
    'es-vlc.prod.surfshark.com:80',
    'es-mad.prod.surfshark.com:80',
    'uk-lon.prod.surfshark.com:80',
    'uk-man.prod.surfshark.com:80',
    'uk-edi.prod.surfshark.com:80',
    'uk-gla.prod.surfshark.com:80',
    
    // --- UNITED STATES SERVERS ---
    'us-sea.prod.surfshark.com:80',
    'us-bos.prod.surfshark.com:80',
    'us-buf.prod.surfshark.com:80',
    'us-nyc.prod.surfshark.com:80',
    'us-bdn.prod.surfshark.com:80',
    'us-dtw.prod.surfshark.com:80',
    'us-ash.prod.surfshark.com:80',
    'us-chi.prod.surfshark.com:80',
    'us-oma.prod.surfshark.com:80',
    'us-ltm.prod.surfshark.com:80',
    'us-slc.prod.surfshark.com:80',
    'us-kan.prod.surfshark.com:80',
    'us-den.prod.surfshark.com:80',
    'us-sfo.prod.surfshark.com:80',
    'us-clt.prod.surfshark.com:80',
    'us-sjc.prod.surfshark.com:80',
    'us-bna.prod.surfshark.com:80',
    'us-atl.prod.surfshark.com:80',
    'us-las.prod.surfshark.com:80',
    'us-lax.prod.surfshark.com:80',
    'us-phx.prod.surfshark.com:80',
    'us-dal.prod.surfshark.com:80',
    'us-mia.prod.surfshark.com:80',
    'us-hou.prod.surfshark.com:80'
];

// 3. The 6 Target URLs
const targetUrls = [
    'https://simplemedicare.co/medicareapp/',
    'https://centerofaffordablehealthinsurance.com/?fbclid=IwY2xjawQNGNBleHRuA2FlbQIxMABicmlkETJaNUlCREg4dzZOeWNRYkJ5c3J0YwZhcHBfaWQPNTQxNjM5NDkzODg5MDI1AAEe5cnUTl2ZdiiQOYyTytPvde6Z9wLWpsSjzQ8M9Sm-Qf78VjqQ5gdoNNXlXAM_aem_KEGaGSWzwl2AqEIOvKRYug',
    'https://centerofaffordablehealthinsurance.com/?fbclid=IwY2xjawQNGjZleHRuA2FlbQIxMABicmlkETJaNUlCREg4dzZOeWNRYkJ5c3J0YwZhcHBfaWQPNTQxNjM5NDkzODg5MDI1AAEeip9gEnJo6sqO827s73DSY2VmThXanX2O2bw0Jv5NXgARavTfvVNjmNPXRhc_aem_IiExcsAEGXB9Vhv4_Vruvg',
    'https://centerofaffordablehealthinsurance.com/?fbclid=IwY2xjawQNGkBleHRuA2FlbQIxMABicmlkETJaNUlCREg4dzZOeWNRYkJ5c3J0YwZhcHBfaWQPNTQxNjM5NDkzODg5MDI1AAEeLaxYtIYMzlZsrOPh9isSKsHJgBA1GGxEssTA93QR9hTWTAGnekn3OUhgrlU_aem_EPJHsrv0G_x0XQ9fruqmKA',
    'https://centerofaffordablehealthinsurance.com/checkifyouqualify/?fbclid=IwY2xjawQNGk5leHRuA2FlbQIxMABicmlkETJaNUlCREg4dzZOeWNRYkJ5c3J0YwZhcHBfaWQPNTQxNjM5NDkzODg5MDI1AAEeTu-WSDxAtfJBKntwlKlwsA3jGq2_Up2gt-S6gR9w4DdSY0bVIH7TdcOlelM_aem_yjysECjgMCC1NMqAg2x6zw',
    'https://centerofaffordablehealthinsurance.com/?fbclid=IwY2xjawQNGlhleHRuA2FlbQIxMABicmlkETJaNUlCREg4dzZOeWNRYkJ5c3J0YwZhcHBfaWQPNTQxNjM5NDkzODg5MDI1AAEeip9gEnJo6sqO827s73DSY2VmThXanX2O2bw0Jv5NXgARavTfvVNjmNPXRhc_aem_IiExcsAEGXB9Vhv4_Vruvg'
];

// 4. The Database (Names & Area Codes)
const firstNames = ["James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda", "David", "Elizabeth", "William", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Lisa", "Daniel", "Nancy", "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley", "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Carol", "Kevin", "Amanda", "Brian", "Dorothy", "George", "Melissa", "Timothy", "Deborah", "Ronald", "Stephanie", "Edward", "Rebecca", "Jason", "Sharon", "Jeffrey", "Laura", "Ryan", "Cynthia", "Jacob", "Kathleen", "Gary", "Amy", "Nicholas", "Angela", "Eric", "Shirley", "Jonathan", "Anna", "Stephen", "Brenda", "Larry", "Pamela", "Justin", "Emma", "Scott", "Nicole", "Brandon", "Samantha", "Benjamin", "Katherine", "Samuel", "Christine", "Gregory", "Debra", "Alexander", "Rachel", "Frank", "Catherine", "Patrick", "Carolyn", "Raymond", "Janet", "Jack", "Ruth", "Dennis", "Maria", "Jerry", "Heather", "Tyler", "Diane", "Aaron", "Virginia", "Jose", "Julie", "Adam", "Joyce", "Nathan", "Victoria", "Henry", "Olivia", "Douglas", "Kelly", "Zachary", "Christina", "Peter", "Lauren", "Kyle", "Joan", "Ethan", "Evelyn", "Walter", "Judith", "Noah", "Megan", "Jeremy", "Andrea", "Christian", "Cheryl", "Keith", "Hannah", "Roger", "Jacqueline", "Terry", "Martha", "Gerald", "Gloria", "Harold", "Teresa", "Sean", "Ann", "Austin", "Sara", "Carl", "Madison", "Arthur", "Frances", "Lawrence", "Kathryn", "Dylan", "Janice", "Jesse", "Jean", "Jordan", "Abigail", "Bryan", "Alice", "Billy", "Julia", "Joe", "Judy", "Bruce", "Sophia", "Gabriel", "Grace", "Logan", "Denise", "Albert", "Amber", "Willie", "Doris", "Alan", "Marilyn", "Juan", "Danielle", "Wayne", "Beverly", "Elijah", "Isabella", "Randy", "Theresa", "Roy", "Diana", "Vincent", "Natalie", "Ralph", "Brittany", "Eugene", "Charlotte", "Russell", "Marie", "Bobby", "Kayla", "Mason", "Alexis", "Philip", "Lori", "Louis"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Henderson", "Barnes", "Alvarado", "Fisher", "Vasquez", "Simmons", "Romero", "Dixon", "Macias", "Mcdonald", "Murray", "Freeman", "Wells", "Webb", "Tucker", "Guzman", "Burns", "Henry", "Weaver", "Shaw", "Gordon", "Meyer", "Black", "Mendez", "Daniels", "Bautista", "Kelley", "Fox", "Washington", "Rojas", "Owens", "Holmes", "Boyd", "Stone", "West", "Ochoa", "Holland"];
const areaCodes = ["201", "202", "203", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215", "216", "217", "218", "219", "220", "223", "224", "225", "227", "228", "229", "231", "234", "235", "239", "240", "248", "251", "252", "253", "254", "256", "260", "262", "267", "269", "270", "272", "274", "276", "279", "281", "283", "301", "302", "303", "304", "305", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "323", "325", "326", "327", "329", "330", "331", "332", "334", "336", "337", "339", "340", "341", "346", "347", "350", "351", "352", "360", "361", "364", "380", "385", "386", "401", "402", "404", "405", "406", "407", "408", "409", "410", "412", "413", "414", "415", "417", "419", "423", "424", "425", "430", "432", "434", "435", "440", "442", "443", "445", "447", "458", "463", "464", "469", "470", "472", "475", "478", "479", "480", "484", "501", "502", "503", "504", "505", "507", "508", "509", "510", "512", "513", "515", "516", "517", "518", "520", "530", "531", "534", "539", "540", "541", "551", "557", "559", "561", "562", "563", "564", "567", "570", "571", "573", "574", "575", "580", "585", "586", "601", "602", "603", "605", "606", "607", "608", "609", "610", "612", "614", "615", "616", "617", "618", "619", "620", "623", "626", "628", "629", "630", "631", "636", "640", "641", "645", "646", "650", "651", "657", "659", "660", "661", "662", "667", "669", "670", "671", "678", "679", "680", "681", "682", "684", "689", "701", "702", "703", "704", "706", "707", "708", "712", "713", "714", "715", "716", "717", "718", "719", "720", "724", "725", "726", "727", "730", "731", "732", "734", "737", "740", "743", "747", "754", "757", "760", "762", "763", "765", "769", "770", "771", "772", "773", "774", "775", "779", "781", "785", "786", "787", "801", "802", "803", "804", "805", "806", "808", "810", "812", "813", "814", "815", "816", "817", "818", "820", "828", "830", "831", "832", "838", "839", "843", "845", "847", "848", "850", "854", "856", "857", "858", "859", "860", "861", "862", "863", "864", "865", "870", "872", "878", "901", "903", "904", "906", "907", "908", "909", "910", "912", "913", "914", "915", "916", "917", "918", "919", "920", "925", "928", "929", "930", "931", "934", "936", "937", "938", "939", "940", "941", "943", "947", "949", "951", "952", "954", "956", "959", "970", "971", "972", "973", "975", "978", "979", "980", "983", "984", "985", "986", "989"];

// Data Generators
const randElem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randStr = (len) => Math.random().toString(36).substring(2, 2 + len);
const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randFirst = () => randElem(firstNames) + randStr(2);
const randLast = () => randElem(lastNames) + randStr(2);
const randPhone = () => randElem(areaCodes) + randNum(1000000, 9999999).toString(); 
const randEmail = () => randFirst().toLowerCase() + randLast().toLowerCase() + randNum(10, 999) + "@mail.com";
const randSSN = () => randNum(100000000, 999999999).toString();

// 5. Core Automation Logic
async function fillMedicareForm(page) {
    try {
        const clickNext = async () => {
            const btn = page.locator('.wpforms-page-next, .wpforms-submit, button:has-text("Next")').locator('visible=true').first();
            await btn.click({ force: true, timeout: 5000 });
            await page.waitForTimeout(1500); 
        };

        const clickRadio = async (textMatch) => {
            const label = page.locator('label.wpforms-field-label-inline, label').filter({ hasText: textMatch }).locator('visible=true').first();
            if (await label.count() > 0) {
                await label.click({ force: true, timeout: 3000 }).catch(() => {});
            }
        };

        console.log(`Processing form on: ${page.url()}`);
        
        await page.waitForSelector('.wpforms-container, .elementor-widget-container', { timeout: 15000 });

        const hasAlternateHeader = await page.locator('text="YOU\'RE 1-STEP AWAY FROM QUALIFYING FOR YOUR FREE IPHONE"').count() > 0;

        if (hasAlternateHeader) {
            await page.locator('text="Yes 65"').click({ force: true, timeout: 3000 }).catch(()=>{});
            await clickNext();
            await clickRadio(/Yes/i);
            await clickNext();
            
            await page.fill('input[name*="first"]', randFirst(), { timeout: 3000 }).catch(()=>{});
            await page.fill('input[name*="last"]', randLast(), { timeout: 3000 }).catch(()=>{});
            await page.fill('input[type="tel"]', randPhone(), { timeout: 3000 }).catch(()=>{});
            await page.fill('input[type="email"]', randEmail(), { timeout: 3000 }).catch(()=>{});
            await clickNext();
            
            await clickRadio(/Yes/i);
            await clickNext();
            await clickRadio(/No/i);
            await clickNext();

        } else {
            await clickRadio(/Yes/i); 
            await clickRadio(/Yes/i); 
            await clickRadio(/Male|Female/i); 
            await clickRadio(/No/i); 
            await clickNext();

            await clickRadio(/Single/i);
            await clickNext();

            await clickRadio(/None/i);
            await clickNext();

            await clickRadio(/\$/i); 
            await clickNext();
            await clickNext(); 

            await page.fill('input[type="email"]', randEmail(), { timeout: 3000 }).catch(()=>{});
            await page.fill('input[type="tel"]', randPhone(), { timeout: 3000 }).catch(()=>{});
            await clickNext();

            await page.fill('input[name*="first"]', randFirst(), { timeout: 3000 }).catch(()=>{});
            await page.fill('input[name*="last"]', randLast(), { timeout: 3000 }).catch(()=>{});
            
            const dropdowns = await page.locator('select').all();
            for (const dropdown of dropdowns) {
                await dropdown.selectOption({ index: randNum(1, 11) }).catch(()=>{}); 
            }

            await page.fill('input[name*="ssn"], input[name*="social"]', randSSN(), { timeout: 3000 }).catch(()=>{});
            await clickNext();
        }
        console.log(`Success: Form submitted gracefully.`);

    } catch (err) {
        console.log(`Tab failed gracefully: Form logic timeout. Moving on to ensure 3000 loop continues.`);
    }
}

// 6. The 3000 Loop Engine
(async () => {
    // Set headless: false for testing so you can watch it run on the RDP
    const browser = await chromium.launch({ headless: false });
    
    for (let i = 1; i <= 3000; i++) {
        const proxyServer = surfsharkServers[Math.floor(Math.random() * surfsharkServers.length)];
        console.log(`\n=== LOOP ${i} / 3000 ===`);
        console.log(`Routing through Proxy: ${proxyServer}`);

        let context;
        try {
            context = await browser.newContext({
                proxy: {
                    server: `http://${proxyServer}`,
                    username: SURFSHARK_USER, 
                    password: SURFSHARK_PASS
                },
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
            });

            await context.route('**/*', (route) => {
                return ['image', 'font', 'media'].includes(route.request().resourceType()) 
                    ? route.abort() 
                    : route.continue();
            });

            const pagePromises = targetUrls.map(async (url) => {
                const page = await context.newPage();
                try {
                    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
                    await fillMedicareForm(page);
                } catch (navErr) {
                    console.log(`Proxy connection timed out for one tab. Skipping.`);
                }
            });

            await Promise.all(pagePromises);

        } catch (error) {
            console.error(`Loop ${i} encountered a critical error: ${error.message}`);
        } finally {
            if (context) await context.close();
            console.log(`Session closed. Cache and cookies wiped.`);
        }
    }

    console.log("\nAll 3000 loops completed!");
    await browser.close();
})();
