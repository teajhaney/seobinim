declare interface buttonProp {
  children: React.ReactNode;
  onclick: () => void;
  disabled?: boolean;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
}
