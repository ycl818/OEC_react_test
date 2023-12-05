## Live Demo
Explore the live demo by visiting this link. [https://oec-react-test.onrender.com/]

**Note**: Before logging in for the first time, ensure you register by following these steps:

1. Click on the "Login" button.
2. Navigate to the bottom of the form.
3. Find and click on the "Sign up" option.
4. Complete the registration process.
5. Return to the login page and sign in with your newly created account.

*if you are lazy to register, you can use this account to log in*

**Username: Qqqq**

**Password: !Qq23456**/*




===========================================================================

### JWT Login System

#### Overview
This repository serves as the frontend for a login system that implements JSON Web Tokens (JWT) for secure authentication. The primary functionality involves the issuance and validation of Access Tokens and Refresh Tokens, ensuring a secure means for API access. The detailed backend code can be found in the corresponding repository linked below.

---

#### Access Token
##### Description
* Format: JSON
* Storage: In-memory (client-side)
* Do Not Store: Avoid storing in local storage or cookies.
##### Usage
* Issued at authorization.
* Utilized by the client for API access until expiration.
* Verified through middleware.
##### Recommendations
* Always store in memory.
* Avoid local storage or cookie storage for increased security.



---

#### Refresh Token
##### Description
* Format: HTTP-only cookie
* Accessibility: Not accessible via JavaScript
* Expiry: Must have an expiration point
##### Usage
* Issued at authorization.
* Used by the client to request a new Access Token.
* Verified through endpoints and database queries.
##### Recommendations
* Secure handling to prevent unauthorized access.
* Regularly check and manage expiration.
* Must be allowed to expire or used during the logout process.



---

#### Token Refresh
##### Description
* Trigger: Client-initiated refresh request.
##### Usage
* Client utilizes the Refresh Token to request a new Access Token.
* New Access Token is issued upon successful verification.
* Helps maintain continuous API access.
##### Recommendations
* Secure the refresh process.
* Ensure proper validation of the Refresh Token.



---



### Backend repo

[https://github.com/ycl818/OEC_react_test_backend]

===========================================================================

簡單的登入登出App
==============================================================================

請遵循以下的規則:
	- 裡面的所有元件, 請自己命名成合理的名字.
	- 原先給的框架請不要改變, 但命名,設定和内容可以更改.
	- 請照著自己覺得合理的邏輯去寫.
	- 請使用 CSS
	- 請使用 Hook
	
==============================================================================

- 在 Left 裡面的元件:
	- Button 1:
		- 功能: 首頁: 以下 Right Button 1區看説明.
	- Button 2: 
		- 功能: 登入: 以下 Right Button 2區看説明.
	- Button 3:
		- 功能: 登出: 以下 Right Button 3區看説明.
- 在 Right 裡面的元件:
	- Button 1: 不管是登入或登出的狀態, 請顯示簡單的公司資訊.
	- Button 2: 如果是登出的狀態: 
					- 有個地方讓使用者輸入使用者名稱.
					- 有個地方讓使用者輸入密碼.
					- 有個 Button 可以讓使用者登入.
				如果是登入的狀態:
					- 正中間放一個下拉選單 (Select):
						- 按下下拉選單後下方彈出的選單需要符合以下功能:
							- 選單裡需要有兩個Tabs可以讓使用者選取
								- 當左邊的Tab被選取時, 使用者需要在選單裡看到版本號 (請給個假的號碼)
								- 當右邊的Tab被選取時, 使用者需要在選單裡看到登入的名稱和密碼
	- Button 3: 讓狀態變成登出
