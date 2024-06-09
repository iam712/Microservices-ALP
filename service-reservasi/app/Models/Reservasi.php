<?php

namespace App\Models;
use App\Http\Controllers\ReservasiController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Reservasi extends Model
{
    use HasFactory, Notifiable;
    protected $table = 'reservasis';
    protected $fillable = [
        'pemesan',
        'platMobil',
        'driver',
        'startDate',
        'endDate',
        'harga',
        'status',
    ];

}
