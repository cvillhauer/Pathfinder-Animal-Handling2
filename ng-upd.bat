CALL git commit -am "pre updates commit"
CALL ng update @angular/cli
CALL git commit -am "ng cli updates to latest"
CALL ng update @angular/core
CALL git commit -am "ng updates to latest"
CALL ng b --prod
CALL ng t --watch=false
