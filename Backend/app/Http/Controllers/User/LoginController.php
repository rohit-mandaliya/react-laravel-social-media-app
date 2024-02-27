<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\UserAddRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function register(UserAddRequest $request)
    {
        try {

            $data = $request->validated();

            $user = User::create($data);

            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'message' => 'Your Account Created Successfully',
                'token' => $token
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }

    public function login(LoginRequest $request)
    {
        try {
            $data = $request->validated();

            $credentials = [
                'email' => $data['email'],
                'password' => $data['password'],
            ];

            if (Auth::attempt($credentials)) {
                $user = User::find(Auth::user()->id);
                $token = $user->createToken('main')->plainTextToken;

                return response()->json(['message' => 'Login Successfully', 'token' => $token], 200);
            } else {
                return response()->json(['message' => 'Your credentials doesn\'t match our records'], 403);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Your credentials doesn\'t match our records'], 403);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        return response()->json(['message' => 'Logout Successfully'], 200);
    }
}
