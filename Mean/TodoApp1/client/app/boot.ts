//Builtin Methods
import { provide } from "angular2/core" ;
import { bootstrap } from "angular2/platform/browser" ;
import { ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from "angular2/router";

//Import Components
import {MyApp} from "./components/main/main";

//Bootstraping
bootstrap(MyApp, 
[ROUTER_PROVIDERS,
provide(LocationStrategy, {useClass: HashLocationStrategy})
]

)