import React from 'react'
import { shallow } from "enzyme";
import CrouterApp from '../CounterApp';

describe('Pruebas en el <CrouterApp/>', () => {
    
    let wrapper = shallow(<CrouterApp />);
    beforeEach( () => {
        wrapper = shallow(<CrouterApp />);
    });

    test('debe de mostrar <CrouterApp/> correctamente ', () => {
        const wrapper = shallow (<CrouterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100 ', () => {
        const wrapper = shallow (<CrouterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText).toBe('100');
    })

    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    })

    test('debe de decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('Debe de colocar el valor del botón por defecto', () => {
        const wrapper = shallow (<CrouterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('105');
    })
    
       
})
