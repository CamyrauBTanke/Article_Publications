/*

export function App() {
  return (

    
  );
}


function Show_And_Hide(name1, name2) {
    var block = document.getElementById(name1);
    var block_none = document.getElementById(name2);
    if (name1) {
        block_none.style.cssText = "display: none;";
        block.style.cssText = "display: block";
    }
}
function Show_Block(name) {
	const screenWidth = window.screen.width;
	if(screenWidth >= 650){
		return ;
	}
	const block = document.getElementById(name);
	var display  = ['grid','none'];
	if (block.style.display != display[1]) {
		block.style.display = display[1];
		block.style.paddingLeft = '20px';
	}
	else{
		block.style.display = display[0];
	}
}

document.addEventListener('DOMContentLoaded', () => {
	
	const button = document.querySelector(".menu-navigation__button");
	const div = document.querySelector('.menu-navigation');

	document.addEventListener( 'click', (e) => {
		if (!e.composedPath().includes(div)){
			div.style.top = '-252px';
		}
		if(e.composedPath().includes(button))
			div.style.top = '84px';
	})
});









const items = {
  "nodes": [
    {
      "id": "abc_172.22.22.214",
      "name": "abc",
      "nodes": [
        {
          "id": "abc_172.22.22.214.if.1",
          "name": "Нода 1"
        },
        {
          "id": "abc_172.22.22.214.if.3",
          "name": "Нода 2"
        },
        {
          "id": "abc_172.22.22.214.if.2",
          "name": "Нода 3"
        }
      ]
    },
    {
      "id": "MON_LOGS_192.168.1.53",
      "name": "MON_LOGS",
      "nodes": [
        {
          "id": "MON_LOGS_192.168.1.53.if.1",
          "name": "lo"
        },
        {
          "id": "MON_LOGS_192.168.1.53.if.2",
          "name": "eth0"
        }
      ]
    }
  ]
};

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  
  toggle = () => {
    let expanded = !this.state.expanded;
    this.setState({
      expanded: expanded
    });
  };
  
  showNodes() {
    let arNodes = [];
    if(this.props.element.nodes && this.props.element.nodes.length > 0) {
      this.props.element.nodes.map((element, index) => {
        arNodes.push(<Node key={index} element={element}/>);
      });
    }
    
    return arNodes;
  }
  
*/