function queue()
{
    this.elements = [];
}


queue.prototype.push = function (e) {
    this.elements.push(e);
}

queue.prototype.pop = fcuntion()
{
    return this.elements.shift();
}

queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
}

queue.prototype.front = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
}

queue.prototype.back = function () {
    return !this.isEmpty() ? this.elements[-1] : undefined;
}

