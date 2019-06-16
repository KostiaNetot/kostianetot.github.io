<?php

	$result = mail("freshartline@gmail.com", "Форма обратной связи Fresh Arts Line", "Данные формы обратной связи:
	 \nИмя: $_POST[name]
	 \nВозраст: $_POST[age]
	 \nE-mail: $_POST[email]
	 \nТелефон: $_POST[phone]
	 \nСообщение: $_POST[message]");

	if ($result)
		echo "Сообщение отправлено успешно!";

	else 
		echo "Сообщение Не отправлено";

?>