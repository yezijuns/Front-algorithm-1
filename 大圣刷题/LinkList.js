// [1, 2, 3, 4]


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkNodeList{
    constructor() {
        this.head = null
        this.length = 0
    }
    append(val) {
        let node = new Node(val)
        let p = this.head
        if(this.head) {
            // 找到链表最后一个节点， 把这个节点的.next属性值赋值为node
            while(p.next) {
                p = p.next
            }
            p.next = node
        } else {
            this.head = node
        }
        this.length++
    }
    print() {
        let p = this.head
        let ret = ''
        if(this.head) {
            do {
                ret += (p.val + '=>')
                p = p.next
            } while(p.next)
            ret += p.val
            console.log(ret)
        } else {
            console.log('empty')
        }
    }
}

let linkList = new LinkNodeList()

linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.print()

console.log(linkList.length)