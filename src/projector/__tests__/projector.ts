import { Operation } from "../config";
import Projector from "../projector"

const getData = () => {
    return {
        projector: {
            "/": {
                "foo": "bar1",
                "baz": "foo1",
            },
            "/foo": {
                "foo": "bar2"
            },
            "/foo/bar": {
                "foo": "bar3"
            }
        }
    }
}

const getProjector = (pwd: string, data = getData()): Projector => {
    return new Projector({
        args: [],
        operation: Operation.Print,
        pwd,
        config: "Hello, my config"
    }, data);
}

test("getValueAll", () => {
    const proj = getProjector("/foo/bar")
    expect(proj.getValueAll()).toEqual({
        "baz": "foo1",
        "foo": "bar3",
    })
})

test("getValue", () => {
    let proj = getProjector("/foo/bar")
    expect(proj.getValue("foo")).toEqual("bar3")
    proj = getProjector("/foo")
    expect(proj.getValue("foo")).toEqual("bar2")
    expect(proj.getValue("baz")).toEqual("foo1")
})

test("setValue", () => {
    let data = getData()
    let proj = getProjector("/foo/bar", data)
    proj.setValue("foo", "baz")
    expect(proj.getValue("foo")).toEqual("baz");
    proj.setValue("baz", "testing")
    expect(proj.getValue("baz")).toEqual("testing");

    proj = getProjector("/", data);
    expect(proj.getValue("baz")).toEqual("foo1");

})

test("removeValue", () => {
    const proj = getProjector("/foo/bar")
    proj.removeValue("baz")
    expect(proj.getValue("baz")).toEqual("foo1");
    proj.removeValue("foo")
    expect(proj.getValue("foo")).toEqual("bar2");

})