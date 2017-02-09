﻿declare module d3 {

    export function sankey(): ISankey;
    export function verticalSankey(): ISankey;
    export var chart: any;

    export interface ISankey {

        nodeWidth(width: number): any;
        nodePadding(padding: number): any;
        leftBorder(_leftBorder: number): any;
        upperBorder(_upperBorder: number): any;
        nodes(_nodes: any): any;
        link(): () => any;
        links(_links: any): any;
        size(_size: number): any;
        layout(iterations: number): ISankey;
        relayout(): ISankey;
    }

  
    

}

//declare module sankey {

//    d3.sankey = function () {
//        var sankey = {},
//            nodeWidth = 24,
//            nodePadding = 8,
//            size = [1, 1],
//            nodes = [],
//            links = [];

//        sankey.nodeWidth = function (_) {
//            if (!arguments.length) return nodeWidth;
//            nodeWidth = +_;
//            return sankey;
//        };

//        sankey.nodePadding = function (_) {
//            if (!arguments.length) return nodePadding;
//            nodePadding = +_;
//            return sankey;
//        };

//        sankey.nodes = function (_) {
//            if (!arguments.length) return nodes;
//            nodes = _;
//            return sankey;
//        };

//        sankey.links = function (_) {
//            if (!arguments.length) return links;
//            links = _;
//            return sankey;
//        };

//        sankey.size = function (_) {
//            if (!arguments.length) return size;
//            size = _;
//            return sankey;
//        };

//        sankey.layout = function (iterations) {
//            computeNodeLinks();
//            computeNodeValues();
//            nodes.sort(function (a, b) {
//                //compare node's x position if they're equals
//                //compare value descending.
//                return (a.x - b.x) != 0 ? a.x - b.x : b.value - a.value;
//            });
//            computeNodeBreadths();
//            computeNodeDepths(iterations);
//            computeLinkDepths();
//            return sankey;
//        };

//        sankey.relayout = function () {
//            computeLinkDepths();
//            return sankey;
//        };

//        sankey.link = function () {
//            var curvature = .5;

//            function link(d) {
//                var x0 = d.source.x + d.source.dx,
//                    x1 = d.target.x,
//                    xi = d3.interpolateNumber(x0, x1),
//                    x2 = xi(curvature),
//                    x3 = xi(1 - curvature),
//                    y0 = d.source.y + d.sy + d.dy / 2,
//                    y1 = d.target.y + d.ty + d.dy / 2;
//                return "M" + x0 + "," + y0
//                    + "C" + x2 + "," + y0
//                    + " " + x3 + "," + y1
//                    + " " + x1 + "," + y1;
//            }

//            link.curvature = function (_) {
//                if (!arguments.length) return curvature;
//                curvature = +_;
//                return link;
//            };

//            return link;
//        };

//        // Populate the sourceLinks and targetLinks for each node.
//        // Also, if the source and target are not objects, assume they are indices.
//        function computeNodeLinks() {
//            nodes.forEach(function (node) {
//                node.sourceLinks = [];
//                node.targetLinks = [];
//            });
//            links.forEach(function (link) {
//                var source = link.source,
//                    target = link.target;
//                if (typeof source === "number") source = link.source = nodes[link.source];
//                if (typeof target === "number") target = link.target = nodes[link.target];
//                source.sourceLinks.push(link);
//                target.targetLinks.push(link);
//            });
//        }

//        // Compute the value (size) of each node by summing the associated links.
//        function computeNodeValues() {
//            nodes.forEach(function (node) {
//                var sourceValue = d3.sum(node.sourceLinks, trueValue);

//                var targetValue = d3.sum(node.targetLinks, trueValue);

//                node.value = Math.abs(sourceValue) > Math.abs(targetValue) ? sourceValue : targetValue;
//                //}

//                if (node.value < 0) {
//                    node.value *= -1;
//                    node.neg = 1;
//                }
//                else {
//                    node.neg = undefined;
//                }
//            });
//        }

//        // Iteratively assign the breadth (x-position) for each node.
//        // Nodes are assigned the maximum breadth of incoming neighbors plus one;
//        // nodes with no incoming links are assigned breadth zero, while
//        // nodes with no outgoing links are assigned the maximum breadth.
//        function computeNodeBreadths() {
//            var remainingNodes = nodes,
//                nextNodes,
//                x = 0;

//            while (remainingNodes.length) {
//                nextNodes = [];
//                remainingNodes.forEach(function (node) {
//                    node.x = (node.column ? node.column - 1 : x);
//                    node.dx = nodeWidth;
//                    node.sourceLinks.forEach(function (link) {
//                        if (nextNodes.indexOf(link.target) < 0) {
//                            nextNodes.push(link.target);
//                        }
//                    });
//                });
//                remainingNodes = nextNodes;
//                ++x;
//            }

//            //
//            moveSinksRight(x);
//            scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
//        }

//        function moveSourcesRight() {
//            nodes.forEach(function (node) {
//                if (!(node.column && node.targetLinks.length)) {
//                    node.x = d3.min(node.sourceLinks, function (d) { return d.target.x; }) - 1;
//                }
//            });
//        }

//        function moveSinksRight(x) {
//            nodes.forEach(function (node) {
//                if (!node.sourceLinks.length && (!node.column || node.x >= x)) {
//                    node.x = x - 1;
//                }
//            });
//        }

//        function scaleNodeBreadths(kx) {
//            nodes.forEach(function (node) {
//                node.x *= kx;
//            });
//        }

//        function computeNodeDepths(iterations) {
//            var nodesByBreadth = d3.nest()
//                .key(function (d) { return d.x; })
//                .sortKeys(d3.ascending)
//                .entries(nodes)
//                .map(function (d) { return d.values; });

//            //nodesByBreadth.forEach(function (nodes, indx) {
//            //    // sort ascendingly by values
//            //    nodes.sort(function (a, b) {
//            //        return b.value - a.value;
//            //    });
//            //});

//            initializeNodeDepth();
//            resolveCollisions();
//            for (var alpha = 1; iterations > 0; --iterations) {
//                relaxRightToLeft(alpha *= .99);
//                resolveCollisions();
//                relaxLeftToRight(alpha);
//                resolveCollisions();
//            }

//            function initializeNodeDepth() {
//                var ky = d3.min(nodesByBreadth, function (nodes) {
//                    return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
//                });

//                nodesByBreadth.forEach(function (nodes) {
//                    nodes.forEach(function (node, i) {
//                        node.y = i;
//                        node.dy = node.value * ky;
//                    });
//                });

//                links.forEach(function (link) {
//                    link.dy = link.value * ky;
//                });
//            }

//            function relaxLeftToRight(alpha) {
//                nodesByBreadth.forEach(function (nodes, breadth) {
//                    nodes.forEach(function (node) {
//                        if (node.targetLinks.length) {
//                            var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
//                            node.y += (y - center(node)) * alpha;
//                        }
//                    });
//                });

//                function weightedSource(link) {
//                    return center(link.source) * link.value;
//                }
//            }

//            function relaxRightToLeft(alpha) {
//                nodesByBreadth.slice().reverse().forEach(function (nodes) {
//                    nodes.forEach(function (node) {
//                        if (node.sourceLinks.length) {
//                            var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
//                            node.y += (y - center(node)) * alpha;
//                        }
//                    });
//                });

//                function weightedTarget(link) {
//                    return center(link.target) * link.value;
//                }
//            }

//            function resolveCollisions() {
//                nodesByBreadth.forEach(function (nodes) {
//                    var node,
//                        dy,
//                        y0 = 0,
//                        n = nodes.length,
//                        i;

//                    // Push any overlapping nodes down.
//                    nodes.sort(ascendingDepth);
//                    for (i = 0; i < n; ++i) {
//                        node = nodes[i];
//                        dy = y0 - node.y;
//                        if (dy > 0) node.y += dy;
//                        y0 = node.y + node.dy + nodePadding;
//                    }

//                    // If the bottom most node goes outside the bounds, push it back up.
//                    dy = y0 - nodePadding - size[1];
//                    if (dy > 0) {
//                        y0 = node.y -= dy;

//                        // Push any overlapping nodes back up.
//                        for (i = n - 2; i >= 0; --i) {
//                            node = nodes[i];
//                            dy = node.y + node.dy + nodePadding - y0;
//                            if (dy > 0) node.y -= dy;
//                            y0 = node.y;
//                        }
//                    }
//                });
//            }

//            function ascendingDepth(a, b) {
//                return a.y - b.y;
//            }
//        }

//        function computeLinkDepths() {
//            nodes.forEach(function (node) {
//                node.sourceLinks.sort(ascendingTargetDepth);
//                node.targetLinks.sort(ascendingSourceDepth);
//            });
//            nodes.forEach(function (node) {
//                var sy = 0, ty = 0;
//                node.sourceLinks.forEach(function (link) {
//                    link.sy = sy;
//                    sy += link.dy;
//                });
//                node.targetLinks.forEach(function (link) {
//                    link.ty = ty;
//                    ty += link.dy;
//                });
//            });

//            function ascendingSourceDepth(a, b) {
//                return a.source.y - b.source.y;
//            }

//            function ascendingTargetDepth(a, b) {
//                return a.target.y - b.target.y;
//            }
//        }

//        function center(node) {
//            return node.y + node.dy / 2;
//        }
//        function trueValue(link) {
//            return link.neg == 1 ? link.value * -1 : link.value;
//        }
//        function value(link) {
//            return link.value;
//        }

//        //function sortNodes(nodes) {
//        //    var tmpNodes = new Array();
//        //    for (var i = 0; i < nodes.length; i++) {
//        //        node = nodes[i];
//        //        if (!tmpNodes[node.column]) {
//        //            tmpNodes[node.column] = [];
//        //        }
//        //        tmpNodes[node.column.toString()].push(node);
//        //    }
//        //    $.each(tmpNodes, function (indx, colNodes) {
//        //        colNodes = _.sortBy(colNodes, function (node) {
//        //            return Math.abs(node.sourceValue) >= Math.abs(node.targetValue) ? -Math.abs(node.sourceValue) : -Math.abs(node.targetValue);
//        //        });
//        //        $.each(colNodes, function (indx, node) {
//        //            node.sortIndex = indx;
//        //        });
//        //    });
       
//        //}
//        return sankey;
//    };

//}

//declare module "sankey" {
//    export = sankey;
//}

 