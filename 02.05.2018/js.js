// JavaScript source code

function check(value) {
    var res = "";
    var hrn = Math.round(value);
    var cop = Math.round((value - Math.floor(value)) * 100 * 100) / 100;
    res += String(hrn);
    if (hrn == 11) res += " hriven";
    else {
        switch (Math.round(hrn / 10)) {
            case 1: res += " hrivna";
                break;
            case 2:
            case 3:
            case 4: res += " hrivni";
                break;
            default: res += " hriven";
                break;
        }
    }
    res += " " + String(cop);
    if (cop == 11) res += " cpijok";
    else {
        switch (Math.round(cop / 10)) {
            case 1: res += " cpijca";
                break;
            case 2:
            case 3:
            case 4: res += " cpijci";
                break;
            case 11:
            default: res += " cpijok";
                break;
        }
    }
    alert(res);
}