import Enzyme from 'enzyme'; // Don't have to declare enzyme in test files because this file is run before any of our tests
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
